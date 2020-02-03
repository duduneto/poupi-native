// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import { UseLoader, useFbListRd, useRd, useToggle } from ".";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function UseFbListItems(info) {
  // set hook
  const callRdListName = useFbListRd();

  // it is called when component did mount
  React.useEffect(() => {
    callRdListName(info);
  }, []);

  // set lets
  let rdItemsList = useRd()[info.rdName];
  let rdItemsLength = rdItemsList && rdItemsList.length;

  // set map itens
  const ITEMSLIST = props => {
    return rdItemsList === null ? (
      <UseLoader size="large" />
    ) : rdItemsLength === 0 ? (
      info.noItem
    ) : (
      rdItemsList.map((item, id) => {
        return props.renderProps({ item, id });
      })
    );
  };

  // send Result
  return [ITEMSLIST, rdItemsLength];
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // set List Call
  let infoPosts = {
    collection: 'posts',
    rdName: 'rdMyPosts',
    noItem: <Text>Sem Item</Text>
    // filter
    where1: { field: 'userId', type: '==', value: rdAuthUser.docId },
    // order
    order1: { field: 'createdAt', type: 'desc' },
    // merges (fromId: field from original collection that shows the id to merge)
    merge1: { collection: 'users', fromId: 'userId' }, 
    merge2: { collection: 'promotions', fromId: 'promotionId' },
  };

  // set Hook
  const [POSTS] = UseFbListItems(infoPosts);

  <POSTS
    renderProps={({item, id}) => {
      return <Text key={id}>{item.name}</Text>;
    }}
  />
  
*/

// ---------------
// #endregion
// ***************************************
