
import { createClient } from 'pexels';

const client = createClient('fs0I9APZ2MSKcgvwZogu33sczFSgkVgjLTkFwaqsy3wGpAqjlYOMojhu');

client.photos.curated({ per_page: 1 }).then(photos => {});

curl -H "Authorization: fs0I9APZ2MSKcgvwZogu33sczFSgkVgjLTkFwaqsy3wGpAqjlYOMojhu" \
  "https://api.pexels.com/v1/search?query=people"

import  {  createClient  }  desde  ' pexels ' ;

const  cliente  =  createClient ( ' fs0I9APZ2MSKcgvwZogu33sczFSgkVgjLTkFwaqsy3wGpAqjlYOMojhu ' ); 
const  consulta  =  ' Cupcakes ' ;

cliente _ fotos _ búsqueda ({  consulta ,  por_página :  1  }). luego ( fotos  =>  {...});



