
import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createFilter} from 'redux-persist-transform-filter';
import chatSlice from "../features/chatSlice";

const saveUserOnlyFilter = createFilter(
    'user',
    ['user']
);

const persistConfig = {
    key: 'user',
    storage,
    whitelist:["user"],
    transforms: [
        saveUserOnlyFilter,
    ]
}




const rootReducer = combineReducers({
    user:userSlice,
    chat:chatSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)



export  const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),
   devTools:true,
});

export const persiststore =persistStore(store)




