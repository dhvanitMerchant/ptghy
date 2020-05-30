import React from 'react';



function SinglePackageService({singlePackageService}) {
    return(
     <ul>
          <li>
              {singlePackageService.service}
          </li>
      </ul>
    )
  }

export default SinglePackageService;