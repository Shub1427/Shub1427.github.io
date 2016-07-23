// Just wanted to learn the implementation of Redux, so making this
// Unnecessary complicated actions/reducer architecture...
export const TYPES = {
  UPDATE_USER: 'UPDATE_USER',
};

export const updateUser = () => {
  const user = {
    name: 'Subroto Biswas',
    designation: 'Software Engineer',
    passion: 'Love for the Treasure Hunt',
  };

  return {
    type: TYPES.UPDATE_USER,
    user,
  };
};
