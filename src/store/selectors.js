export const selectResourcesWithThisFavorite = developersInSelect => state => {
  console.log("dev in select", developersInSelect, "state", state)
  const developer = state.developers.find(dev => dev.id === developersInSelect);
    if (!developer) {
       return [];
    }
  return state.resources.filter(res => developer.favorites.includes(res.id));
};
  
export const selectUserLoggedIn = state => {
  return state.developers.find(dev => dev.id === state.user.id)
}

