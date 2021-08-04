export const mapTagToTitle = (id: string): string => {
  switch(id) {
    case '1':
      return 'odchudzanie';
    case '2':
      return 'modelowanie pośladków';
    case '3':
      return 'budowa masy mięśniowej';
    case '4':
      return 'taniec na rurze';
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