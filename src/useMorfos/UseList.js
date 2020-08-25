// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useData } from '.';

// ----------- set Default Component
export default ({ data, children, fieldId }) => {
  const dataToMap = useData(data);
  const condArr = Array.isArray(dataToMap) && dataToMap;
  const condId = fieldId ?? 'id';

  if (!condArr) {
    const LEIA =
      'Envie um array de objetos pro UseList com id! Você pode usar o INIT DATA pra preparar a lista!';
    throw new Error('Não é ARRAY!', LEIA);
  }

  if (condArr.length === 0) {
    return children(false, true);
  }

  return condArr.map(item => {
    if (!item[condId]) {
      const LEIA =
        'Envie um array de objetos pro UseList com id! Você pode passar a prop fieldId com uma string indicando outro campo que não seja id pra servir como referência!';
      throw new Error(
        `Item não tem propriedade ${condId} pra servir como key!`,
        LEIA,
      );
    }

    return children(item[condId], false);
  });
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

<UseList data={'D1.productList'}>
  {(itemId, noItem) =>
    noItem ? <NoItemView /> : <ProdItem itemId={itemId} />
  }
</UseList>

<UseList data={'D2.forms.iptsArr'}>
  {itemId => <IptItem itemId={itemId} />}
</UseList>

*/

// ---------------
// #endregion
// ***************************************
