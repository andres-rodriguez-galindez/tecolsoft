//Estado En Proceso En gestión Progamado Suspendido Escalado Solucionado Cancelado

=if([$Status] == 'Solucionado', 'false', 'true')
//¿Cual es el tipo de solicitud?
=if([$Tipo_x0020_de_x0020_solicitud] == '', 'false', 'true')
//Responsable Remotamente
=if([$_x00bf_Aque_x00e1_reapertenece_x] == '', 'false', 'true')
//¿A que área pertenece el caso?
=if([$Assignedto0] == '', 'false', 'true')
//Prioridad
=if([$Prioridad] == '', 'false', 'true')

//Compañia del solicitante
=if([$Compa_x00f1_ia] == '', 'false', 'true')
//Celular del solicitante 
=if([$Celulardelsolicitante] == '', 'false', 'true')
//Ciudad del solicitante
=if([$Ciudaddelsolicitante] == '', 'false', 'true')
//Rol del solicitante
=if([$Cargodelsolicitante] == '', 'false', 'true')
//Tipo de contrato
=if([$Tipodecontrato] == '', 'false', 'true')
//Nombre del solicitante
=if([$Nombredelsolicitante] == '', 'false', 'true')
//Dirección del solicitante
=if([$Direcci_x00f3_ndelsolicitante] == '', 'false', 'true')


//¿Cual es el tipo de servicio?
=if([$Serviciosolicitado] == '', 'false', 'true')
//¿Cual es el tipo de actividad?
=if([$Categoria] == '', 'false', 'true')
//¿Cual fue la solución?
=if([$Actividad] == '', 'false', 'true')
//¿Por que medio le solicitaron el caso?
=if([$_x00bf_Porquemediolesolicitarone] == '', 'false', 'true')
//¿El caso es facturable?
=if([$_x00bf_Elcasoesfacturable_x003f_] == '', 'false', 'true')
//¿Desde cual ciudad presto el servicio?
=if([$_x00bf_Desdecualciudadprestoelse] == '', 'false', 'true')
//¿El caso se soluciono remoto o en sitio?
=if([$_x00bf_Elcasosesolucionoremotooe] == '', 'false', 'true')

//Nombre del técnico en sitio
=if([$Nombredelt_x00e9_cnicoensitio] == '', 'false', 'true')
//Celular del técnico
=if([$Celulardelt_x00e9_cnico] == '', 'false', 'true')
//Cedula del técnico
=if([$Ceduladelt_x00e9_cnico] == '', 'false', 'true')
//Correo del técnico en sitio
=if([$Correodelt_x00e9_cnicoensitio] == '', 'false', 'true')

//Fecha y hora de atención
=if([$Fechayhoradeatenci_x00f3_n] == '', 'false', 'true')
//Fecha y hora de asignación del técnico
=if([$Fechayhoradeasignaci_x00f3_n] == '', 'false', 'true')
//Fecha y hora de llegada del técnico
=if([$Fechayhoradellegadadelt_x00e9_cn] == '', 'false', 'true')
//Fecha y hora de salida del técnico
=if([$Fechayhoradesalidadelt_x00e9_cni] == '', 'false', 'true')
//Fecha y hora de cierre de la solicitud
=if([$Fechayhoradecierredelasolicitud] == '', 'false', 'true')

//Área donde se encuentra el equipo
=if([$_x00c1_readondeseencuentraelequi] == '', 'false', 'true')
//Nombre del equipo atendido
=if([$Nombredelequipoatendido] == '', 'false', 'true')
//Serial del equipo atendido
=if([$Serialdelequipoatendido] == '', 'false', 'true')
//Estado fisico del equipo
=if([$Seguimientouno] == '', 'false', 'true')
//Marca del equipo
=if([$Marcadelequipo] == '', 'false', 'true')
//Modelo del equipo
=if([$Modelodelequipo] == '', 'false', 'true')

//Recomendaciones
=if([$Seguimientodos] == '', 'false', 'true')
//Solución detallada del caso
=if([$Descripci_x00f3_ndelasoluci_x00f] == '', 'false', 'true')

    formatDateTime('15-06-2009T13:45:30', 'dd-MM-yyyy hh:mm:ss tt')

    utcNow('dd-MM-yyyy hh:mm:ss tt')    


    [{"name":"Imagen de WhatsApp 2024-08-20 a las 13.42.15__test.jpg","link":"https://tecolsofsas-my.sharepoint.com/personal/ayuda_tecolsoft_com/Documents/Aplicaciones/Microsoft%20Forms/Orden%20de%20servicio%20digital/Pregunta/Imagen%20de%20WhatsApp%202024-08-20%20a%20las%2013.42.15__test.jpg","id":"016N766HXYWIDFMKD7CJG26PSI7WR3FMUY","type":null,"size":162075,"referenceId":"016N766HREZRQPYIAJAFEI7LCTMBYS6R4S","driveId":"b!o27F38QEBkm2K8NYx-Aoj9BPqESHUF1BpPntLLRMoDvQcghhxi7bT61I-VhuZ6py","status":1,"uploadSessionUrl":null}]

    // /Aplicaciones/Microsoft Forms/Orden de servicio digital/Pregunta/

    @equals(triggerBody()?['body']['Status',3]


    _api/web/lists/GetByTitle('Incidencias')/items(@{triggerBody()?['ID']})/validateUpdateListItem

    =if([$Nombredelsolicitante] == '', 'false', 'true')



        {
            "responder": "anonymous",
            "submitDate": "8/27/2024 12:34:21 PM",
            "r8ad4c37faaac49a7a63d15409155691b": "Favio Rodriguez",
            "r6a78e27cd51e4f4e8c6a0d6b82545f07": "",
            "r38592780889a4dfe8ec12d8d91c5dc18": "",
            "ra2fbdb22921b4cd19c03b221d4331b2c": "Salida"
          }


          {
            "baseTime": "2024-08-27T12:47:06.2756022Z",
            "formatString": "dd-MM-yyyy hh:mm:ss tt",
            "sourceTimeZone": "SA Pacific Standard Time",
            "destinationTimeZone": "SA Pacific Standard Time"
          }
          {
            "body": "27-08-2024 07:47:06 AM"
          }
          
          convertTimeZone(utcNow(),'UTC','SA Pacific Standard Time','dd-MM-yyyy hh:mm:ss tt')

          convertTimeZone(utcNow(),'UTC','SA Pacific Standard Time','yyyy-MM-ddTHH:mm:ssZ')

          convertTimeZone(utcNow(),'UTC-05:00','SA Pacific Standard Time','yyyy-MM-ddTHH:mm:ssZ')
          
          //crear un estado cerrado, se creo estado cerrado y re abierto
          //definir que pasado un día del caso en estado solucionado y no califica la encuesta cerrar el caso, como satisfactorio
          //El flujo de calificación de encuesta agregue un campo nuevo de si o no, incluirlo en el proceso para actualizar los items
          //Si el cliente califica si o no, debe reabrirse el caso, enviar notificación.
          //la solución que se envie al cliente, no debe enviar la recomendación del caso.

          //Mediciíon de casos fabio, como medirlo con los casos y el nuevo Sharepoint

          //politica de urgencia extracontractuales y comunicación con los clientes.
          //proceso en la llamada cuando son temas extracontractuales.
          //indicadores de perfiles
          //Manuales de perfiles
          //Rol de compras bajo un valor 900 esta aprobado.
          //servicios de proveedores un dia o medio dia de outsorcing politica rol, valores de precios.
          //formato para las cotizaciones requerimiento de compras.
          //notificación de solucionado en sitio tengo encuesta de calidad y no de encuesta en sitio

          @{triggerBody()?['Created']} eq '@{formatDateTime(utcNow(), 'yyyy-MM-dd')}'

          @{triggerBody()?['Created']} gt '@{formatDateTime(addDays(utcNow(), -3), 'yyyy-MM-dd')}'


          {
            "formValues":[
                {
                    "FieldName":"Status",
                    "FieldValue":"Re abierto"
                 }
            ]
        }


        {
          "formValues":[
      {
                  "FieldName":"Escalado",
                  "FieldValue":"Si"
               },
      {
                  "FieldName":"Fechadeescalamiento",
                  "FieldValue":"@{body('Convertir_la_zona_horaria_escalar-rh')}"
               }
      
          ]
      }


      @equals(triggerOutputs()?['body/Status'],'Programado')
      @equals(triggerOutputs()?['body/Status/Value'],'Programado')
      @equals(triggerOutputs()?['body/Status/Value'],'Pendiente')
      @equals(triggerOutputs()?['body/Status/Value'],'Escalado')
      @equals(triggerOutputs()?['body/Status/Value'],'Solucionado')
      
      equals(triggerOutputs()?['body/OData__x00bf_Sesolucionoelcaso_x003f_/Value'],'No')

      equals(triggerOutputs()?['body/OData__x00bf_Elcasosesolucionoremotooe/Value'],'En sitio')
      equals(triggerOutputs()?['body/OData__x00bf_Elcasosesolucionoremotooe/Value'],'Remoto')

      @equals(triggerOutputs()?['body/Resoluci_x00f3_n/Value'],'Rechazado')
      equals(triggerOutputs()?['body/OData__x00bf_Sesolucionoelcaso_x003f_/Value'],'Sin seleccionar')

      Programado
      @equals(triggerOutputs()?['body/Estado/Value'],'Programado')


      OData__x00bf_Sesolucionoelcaso_x003f_ eq 'Sin seleccionar' and Status eq 'Cerrado'

      Rechazado eq 'Sin seleccionar'

      @equals(triggerBody()?['Enviaractadeservicio']?['Value'],'Si')
      equals(triggerBody()?['Actaenviada']?['Value'],null)

      {
        "caso":"@{triggerBody()?['ID']}",
        "fechasol";"@{triggerBody()?['Created']}",
        "fechaate":"@{triggerBody()?['Fechayhoradeatenci_x00f3_n']}",
        "horallegada":"@{triggerBody()?['Fechayhoradeatenci_x00f3_n']}",
        "horasalida":"@{triggerBody()?['Fechayhoradesalidadelt_x00e9_cni']}",
        "tiemposol":"@{triggerBody()?['Created']}",
        "empresa":"@{triggerBody()?['Compa_x00f1_ia']?['Value']}",
        "nombreuser":"@{triggerBody()?['Nombredelsolicitante']?['Value']}",
        "mailuno":"@{triggerBody()?['Nombredelsolicitante0']}",
        "direc":"@{triggerBody()?['Direcci_x00f3_ndelsolicitante']}",
        "ciudad":"@{triggerBody()?['OData__x00bf_Desdecualciudadprestoelse']?['Value']}",
        "nombretec":"@{triggerBody()?['Nombredelt_x00e9_cnicoensitio']?['Value']}",
        "nombreequi":"@{triggerBody()?['Nombredelequipoatendido']}",
        "etiquetaequi":"@{triggerBody()?['Etiquetadelequipo']}",
        "marcaequi":"@{triggerBody()?['Marcadelequipo']}",
        "molequi":"@{triggerBody()?['Modelodelequipo']}",
        "serialequibios":"@{triggerBody()?['Serialdelequipoatendido']}",
        "servgarantia":"@{triggerBody()?['Servicioporgarantia']?['Value']}",
        "serrespuesto":"@{triggerBody()?['Servicioconrepuesto']?['Value']}",
        "descripuno":"@{triggerBody()?['Description']}",
        "descripdos":"@{triggerBody()?['Seguimientouno']?['Value']}",
        "descriptres":"@{triggerBody()?['Descripci_x00f3_ndelasoluci_x00f']}",
        "descripcuatro":"@{triggerBody()?['Seguimientodos']}",
        "cedulaclien":"@{triggerBody()?['Ceduladelsolicitante']}"
        }


        replace(outputs('Obtener_contenido_de_archivo')?['body'],'{nomcliente}',variables('Objeto')?['nomcliente'])
        replace(outputs('nomcliente'),'{emcliente}',variables('Objeto')?['emcliente'])
        replace(outputs('emcliente'),'{fechcreacion}',variables('Objeto')?['fechcreacion'])

        replace(outputs('fechasol'),'fechaate',variables('Objetodeacta')?['fechaate'])
        replace(outputs('fechaate'),'horallegada',variables('Objetodeacta')?['horallegada'])
        replace(outputs('horallegada'),'horasalida',variables('Objetodeacta')?['horasalida'])
        replace(outputs('horasalida'),'tiemposol',variables('Objetodeacta')?['tiemposol'])
        replace(outputs('tiemposol'),'nombreuser',variables('Objetodeacta')?['nombreuser'])
        replace(outputs('nombreuser'),'mailuno',variables('Objetodeacta')?['mailuno'])
        replace(outputs('ciudad'),'nombretec',variables('Objetodeacta')?['nombretec'])
        replace(outputs('nombretec'),'nombreequi',variables('Objetodeacta')?['nombreequi'])
        replace(outputs('nombreequi'),'etiquetaequi',variables('Objetodeacta')?['etiquetaequi'])
        replace(outputs('etiquetaequi'),'molequi',variables('Objetodeacta')?['molequi'])
        replace(outputs('molequi'),'serialequibios',variables('Objetodeacta')?['serialequibios'])
        replace(outputs('serialequibios'),'servgarantia',variables('Objetodeacta')?['servgarantia'])
        replace(outputs('servgarantia'),'serrespuesto',variables('Objetodeacta')?['serrespuesto'])
        replace(outputs('serrespuesto'),'descripuno',variables('Objetodeacta')?['descripuno'])
        replace(outputs('descripuno'),'descripdos',variables('Objetodeacta')?['descripdos'])
        replace(outputs('descripdos'),'descriptres',variables('Objetodeacta')?['descriptres'])
        replace(outputs('descriptres'),'descripcuatro',variables('Objetodeacta')?['descripcuatro'])
        replace(outputs('descripcuatro'),'cedulaclien',variables('Objetodeacta')?['cedulaclien'])

        base64(outputs('Obtener_contenido_de_archivo_guardado_en_pdf')?['body'])


        
        base64(outputs('Obtener_contenido_de_archivo_guardado_en_pdf')?['body'])
        base64(outputs('Obtener_contenido_de_archivo_pdf')?['body'])
        
        
        
