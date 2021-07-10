import { createMachine } from "xstate";

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
