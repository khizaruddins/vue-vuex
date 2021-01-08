export default {
  autoIncrByThreeAfterTwoSec(context, payload){
    setTimeout(()=>{
      context.commit('increase',payload);
    }, 2000);
  }
}