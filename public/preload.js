const { contextBridge, ipcRenderer } = require('electron');
const db = require('./idimng.js')

contextBridge.exposeInMainWorld('api', {
  canal: async (data) => {      
    try {            
      const res = await db.canal(data);      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-success text-center'>'Datos guardados con éxito'</div>";
      console.log(res);
    }catch(err){      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-danger text-center'>'Error: '</div>" + err;
    }
  },
  sector: async (data) => {      
    try {            
      const res = await db.sector(data);      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-success text-center'>'Datos guardados con éxito'</div>";
      console.log(res);
    }catch(err){      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-danger text-center'>'Error: '</div>" + err;
    }
  }
})