import ac1_Create from "./ac1_Create";
import ac3_Update from "./ac3_Update";
import ac4_Delete from "./ac4_Delete";

import asyncs from "./asyncs";
import ac2_Read from "./ac2_Read";
import dynActions from "./dynActions";

export default (state, action) => ({
  ...ac1_Create(state, action),
  ...ac2_Read(state, action),
  ...ac3_Update(state, action),
  ...ac4_Delete(state, action),

  ...asyncs(state, action),
  ...dynActions(state, action),
});
