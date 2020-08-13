import useStl from '../config/styles';

export default {
  pad: (arg1, arg2, arg3, arg4) => {
    console.log('arg2', arg2);
    if (arg2 === undefined && arg3 === undefined && arg4 === undefined) {
      return {
        paddingTop: arg1,
        paddingRight: arg1,
        paddingBottom: arg1,
        paddingLeft: arg1,
      };
    }

    if (arg3 === undefined && arg4 === undefined) {
      return {
        paddingTop: arg1,
        paddingRight: arg2,
        paddingBottom: arg1,
        paddingLeft: arg2,
      };
    }

    return {
      paddingTop: arg1,
      paddingRight: arg2,
      paddingBottom: arg3,
      paddingLeft: arg4,
    };
  },
  ...useStl,
};
