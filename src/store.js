import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    api_key:'',
    email:'',
    password:'',
    full_name:'',
    username:'',
    is_login : false,
    listNews : []
}

const baseUrl = "https://newsapi.org/v2";
const searchCategory = "/top-headlines";
const searchSource  = "bbc-news";
const keyAPI = "31a74b58e4bb4e1bb1d7bb0542dd1d81";
const myReqUrl = baseUrl + searchCategory + "?sources="+ searchSource + "&apiKey=" + keyAPI



export const store = createStore(initialState)

export const actions = store => ({
    setField:(state,e) => {
        return {[e.target.name] : e.target.value};
    },
    postLogout: state =>{
        return {is_login : false};
    },
    postLogin : async state => {
        const data = {username: state.username, password: state.password};
        await axios
        .post("https://ridhorosaATA.free.beeceptor.com/signin", data)
        .then(response => {
            console.log("postLogin response", response.data);
            if(response.data.hasOwnProperty('api_key')){
                store.setState({
                    is_login : true,
                    api_key : response.data.api_key,
                    full_name : response.data.full_name,
                    email : response.data.email
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    },
    showHeadLine : async state => {
    const data = {}
    await axios
    .get(myReqUrl)
    .then(response => {
    console.log(response.data)
      store.setState({listNews: response.data.articles});
      
    })
    .catch(function(error){
      console.log(error)
    })
    }
});