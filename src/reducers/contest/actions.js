import * as types from './actionTypes';
import Utility from '../../services/Utility';
import axios from 'axios';
import Constants from '../../assets/Constants';
import appActions from '../app/actions';
import Contest from './../../services/Contest/Contest';

const setUploadCount = uploadCount => ({
    type: types.CONTEST_UPLOAD_COUNT,
    uploadCount,
});

const addEntry = entry => ({
    type: types.CONTEST_ADD_ENTRY,
    entry,
});

const setAssetUploading = isUploading => ({
    type: types.CONTEST_IS_UPLOADING,
    isUploading,
});

const setEntryFilePath = entryFilePath => ({
    type: types.CONTEST_ENTRY_FILE_PATH,
    entryFilePath,
});

const setContestFeed = feed => ({
    type: types.CONTEST_SET_CONTEST_FEED,
    feed,
})

const setContestData = data => ({
    type: types.CONTEST_SET_DATA,
    data,
});

const addToEntries = entries => ({
    type: types.CONTEST_ADD_TO_ENTRIES,
    entries,
});

const addEntries = entries => ({
    type: types.CONTEST_ADD_ENTRIES,
    entries,
});

const addEntryCategory = entryCategory => ({
    type: types.CONTEST_ADD_ENTRY_CATEGORY,
    entryCategory,
});

const addEntryById = byId => ({
    type: types.CONTEST_ADD_ENTRY_BY_ID,
    byId,
});

const setSearchResult = search => ({
    type: types.CONTEST_SET_SEARCH_RESULT,
    search,
});

const setProgress = requesting => ({
    type: types.CONTEST_SET_PROGRESS,
    requesting,
});

const setJoinProgress = progress => ({
    type: types.CONTEST_SET_JOIN_PROGRESS,
    progress,
});

const setContestUserRole = userRole => ({
    type: types.CONTEST_SET_USER_ROLE,
    userRole,
});

const setTopContestants = topContestants => ({
    type: types.CONTEST_SET_TOP_CONTESTANTS,
    topContestants,
});

const getTopContestants = (form, token) => dispatch => {
    Contest.getTopContestants(form, token) 
        .then( response => {
            if(!response.error) {
                setTopContestants({byId: response.byId, allIds: response.allIds});
            }
        } )
        .catch( error => console.log(error))
}

const handleContestSearch = (form, token) => dispatch => {
    dispatch(setProgress(true));
    Contest.searchContest(form, token)
        .then( response => {
            dispatch(setProgress(false));
            console.log(response);
            if(!response.error) {
                dispatch(setSearchResult({byId: response.byId, allIds: response.allIds}));
            }
        } )
        .catch( error => {
            dispatch(setProgress(false));
            console.log(error);
        });
};

const getContest = (slug, user_id) => {
    return dispatch => {
        dispatch(setDefault());
        dispatch(appActions.appIsLoading(true));
        Contest.getContest(slug, user_id)
            .then( data => {
                const response = data;
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(setContestData(response.data))
                    dispatch(setContestUserRole(Utility.isset(response.data.userRole)? response.data.userRole: 0));
                    dispatch(addEntries(response.data.posts));
                }
            })
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error)
            })
    }
}

function uploadMedia (token, form) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application',
        'Authorization': 'Bearer ' + token,
    }
    return dispatch => {
        dispatch(setAssetUploading(true));
        dispatch(setUploadCount(0));
        axios.post(Constants.BASE_URL + 'api/upload-entry-media', form, {
            headers: headers,
            onUploadProgress: progressEvent => {
                if(progressEvent.lengthComputable) {
                    const count = Utility.progress(progressEvent);
                    dispatch(setUploadCount(count));
                }
            }
        }).then( response => {
            dispatch(setAssetUploading(false));
            if(response.data && !response.error)
                dispatch(setEntryFilePath(response.data.data.path));
        }).catch( error => {
            dispatch(setAssetUploading(false));
            console.log(error);
        });
    }
};

const handleAddEntry = (form, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.addEntry(form, token)
            .then( response => {
                console.log(response)
                dispatch(appActions.appIsLoading(false));
                dispatch(appActions.addData(response));
                dispatch(setEntryFilePath(""));
                const entry = response.data;
                if(!response.error) {
                    dispatch(addEntry(entry));
                    dispatch(addToEntries(entry));
                }
            })
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                dispatch(setEntryFilePath(""));
                console.log(error);
            })
    }
};

const joinAsContestant = (form, token) => dispatch => {
    dispatch(setJoinProgress({status: true, message: 'Joining ...'}));
    Contest.joinAsContestant(form, token)
        .then( response => {
            dispatch(setJoinProgress({staus: false, message: 'You are now a contestant!'}));
            dispatch(setContestUserRole(2));
        })
        .catch ( error => {
            dispatch(setJoinProgress({status: false, message: 'Couldn\'t join the contest. Pls refresh the window and retry.'}));
            console.log(error)
        } )
}

const joinAsWorkforce = (form, token) => dispatch => {
    dispatch(setJoinProgress({status: true, message: 'Joining ...'}));
    Contest.joinAsWorkforce(form, token)
        .then( response => {
            dispatch(setJoinProgress({status: false, message: 'You are now a workforce!', joined: true}));
            dispatch(setContestUserRole(3));
        })
        .catch ( error => {
            dispatch(setJoinProgress({status: false, message: 'Couldn\'t join the contest. Pls refresh the window and retry.'}));
            console.log(error)
        } )
};

const withdrawFromContest = (form, token) => dispatch => {
    dispatch(setJoinProgress({status: true, message: 'Withdrawing ...'}));
    Contest.withdrawFromContest(form, token)
        .then( response => {
            console.log(response)
            dispatch(setJoinProgress({status: false, message: 'You\'ve now withdrawn from the contest!'}));
            dispatch(setContestUserRole(0));
        })
        .catch ( error => {
            dispatch(setJoinProgress({status: false, message: 'Couldn\'t withdraw from the contest. Pls refresh the window and retry.'}));
            console.log(error)
        } )
} 

const getContestFeed = () => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.getContestFeed()
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(setContestFeed(response.data));
                }
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

const followContest = (form, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.follow(form, token)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                console.log(response)
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error)
            } )
    }
}

function setDefault() {
    return dispatch => {
        dispatch(setUploadCount(0));
        dispatch(addEntry({}));
        dispatch(setAssetUploading(false));
        dispatch(setEntryFilePath(""));
        dispatch(setContestFeed({}));
        dispatch(setContestData({}));
        dispatch(addEntryCategory(""));
        dispatch(setJoinProgress({}));
        dispatch(setContestUserRole(0));
    }
}

const contestActions = {
    setAssetUploading,
    setUploadCount,
    addEntry,
    uploadMedia,
    getContest,
    handleAddEntry,
    setContestFeed,
    getContestFeed,
    setDefault,
    followContest,
    addEntryCategory,
    addEntryById,
    handleContestSearch,
    joinAsContestant,
    withdrawFromContest,
    joinAsWorkforce,
    getTopContestants,
};

export default contestActions;