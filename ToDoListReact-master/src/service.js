import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5122/items';
const instance = axios.create();

instance.interceptors.response.use(
  response=>response,
  error=>{
    console.log(error);
    return Promise.reject(error);
  } 
);


export default {
  getTasks: async () => {
    const result = await instance.get()    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await instance.post('',{Name:name, IsComplete:false});
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await instance.put(`/${id}?isComplete=${isComplete}`)
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await instance.delete(`/${id}`)
    console.log('deleteTask')
    return result.data;
  }
};
