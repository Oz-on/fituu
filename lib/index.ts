import {TagProps} from './contexts/UserDataProvider';
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

export const mapUserType = (name: string): number => {
  switch(name) {
    case 'personal_trainer':
      return 1;
    case 'nutritionist':
      return 2;
    case 'client':
      return 3;
    default:
      throw new Error('Wrong user type name given');
  }
}

export const mapUserTypeToInputId= (type: string): string => {
  switch(type) {
    case 'Trener personalny':
      return 'personal_trainer';
    case 'Dietetyk':
      return 'nutritionist';
    case 'Klient':
      return 'client';
    default:
      throw new Error('Wrong user type name given');
  }
}