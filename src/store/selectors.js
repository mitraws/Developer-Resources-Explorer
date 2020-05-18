export const selectResources = state => {
    return state.resources;
  };
  
  export const selectResourcesWithThisFavorite = developersInSelect => state => {
    console.log("dev in select", developersInSelect, "state", state)
        const developer = state.developers.find(dev => dev.id === developersInSelect);
      if (!developer) {
        return [];
      }
    return state.resources.filter(res => developer.favorites.includes(res.id));
    

    };
  

    // return state.resources.data.filter(resource => {
    //   return developer.favorites.includes(resource.id);