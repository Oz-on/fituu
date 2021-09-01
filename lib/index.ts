import {TagProps} from '../components/lib/useUser';

export const ERROR_CODES = {
  authError: 'authError',
  applicationError: 'applicationError',
  serverError: 'serverError',
};

export const mapTagToTitle = (id: string): string => {
  switch(id) {
    case '1':
      return 'Odchudzanie';
    case '2':
      return 'Wzmocnienie';
    case '3':
      return 'Siła';
    case '4':
      return 'Sylwetka';
    case '5':
      return 'treningi siłowe';
    case '6':
      return 'tenis';
    case '7':
      return 'pływanie';
    case '8':
      return 'lekkoatletyka';
  }
};

export const mapTagToBool = (tags: Array<TagProps>): Object => {
  const mapOfTags = {};
  tags.forEach(tag => {
    mapOfTags[tag.id.toString()] = true;
  });
  return mapOfTags;
}

export const getTagsArr = (tags: Object): Array<number> => {
  // For a now in data base there are only 4 types
  const tagsArr = [];
  Object.keys(tags).forEach(key => {
    if(tags[key]) {
      tagsArr.push(parseInt(key, 10));
    }
  });

  return tagsArr;
}

export const mapUserTypeIdToString = (id: number): string => {
  switch (id) {
    case 1:
      return "Trener Personalny";
    case 2:
      return "Dietetyk";
    case 3:
      return "Klient";
  }
}


export const mapUserTypeToInputId= (type: string): number => {
  switch(type) {
    case 'Trener personalny':
      return 1;
    case 'Dietetyk':
      return 2;
    case 'Klient':
      return 3;
    default:
      throw new Error('Wrong user type name given');
  }
}