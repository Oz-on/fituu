import { createMachine, interpret, assign} from "xstate";
import { useSession } from "next-auth/client";

import Api from "../api";

export const sideNavMachine = createMachine({
  id: 'sideNav',
  initial: 'dashboard',
  states: {
    dashboard: {
      on: {
        HIGHLIGHT_MYDATA: {target: 'myData'},
        HIGHLIGHT_CLIENTS: {target: 'clients'},
        HIGHLIGHT_MESSAGES: {target: 'messages'},
      },
    },
    myData: {
      on: {
        HIGHLIGHT_CLIENTS: {target: 'clients'},
        HIGHLIGHT_MESSAGES: {target: 'messages'},
        HIGHLIGHT_DASHBOARD: {target: 'dashboard'}
      },
    },
    clients: {
      on: {
        HIGHLIGHT_MYDATA: {target: 'myData'},
        HIGHLIGHT_MESSAGES: {target: 'messages'},
        HIGHLIGHT_DASHBOARD: {target: 'dashboard'}
      },
    },
    messages: {
      on: {
        HIGHLIGHT_MYDATA: {target: 'myData'},
        HIGHLIGHT_CLIENTS: {target: 'clients'},
        HIGHLIGHT_DASHBOARD: {target: 'dashboard'}
      }
    },
  }
});

interface UserContext {
  token: string,
  user: {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    city: string | null,
    region: string | null,
    country: string | null,
    tags: Array<{
        id: number,
        title: string
    }>,
    profile_photo_url: string,
    description: string,
    certificates: string,
    type: string

  } | null,
  error: null | any,
};

export const createUserMachine = (token: string) => {
  return createMachine<UserContext>({
    id: 'userMachine',
    initial: 'idle',
    context: {
      token: token,
      user: null,
      error: null,
    },
    states: {
      idle: {
        on: {
          FETCH: {target: 'loading'},
        },
      },
      loading: {
        invoke: {
          id: 'getUser',
          src: (context, event) => Api.fetchUser(context.token),
          onDone: {
            target: 'success',
            actions: assign({ user: (_, event) => event.data}),
          },
          onError: {
            target: 'failure',
            actions: assign({ error: (_, event) => event.data}),
          }
        },
      },
      success: {
        type: 'final',
      },
      failure: {
        type: 'final',
      }
    }
  });
}

export const useUserMachine = (): [state: Object, send: Function, service: Object] => {
  const [session] = useSession();
  console.log('session from userMachine: ', session);

  const userMachine = createUserMachine(session.accessToken);

  const service = interpret(userMachine).onTransition((state) => {
    return [state, service.send, service];
  });

  service.start();

  return [service.initialState, service.send, service];

};