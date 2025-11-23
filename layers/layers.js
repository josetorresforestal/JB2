var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Humedales_1 = new ol.format.GeoJSON();
var features_Humedales_1 = format_Humedales_1.readFeatures(json_Humedales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Humedales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedales_1.addFeatures(features_Humedales_1);
var lyr_Humedales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedales_1, 
                style: style_Humedales_1,
                popuplayertitle: 'Humedales',
                interactive: true,
                title: '<img src="styles/legend/Humedales_1.png" /> Humedales'
            });
var format_Localidades_2 = new ol.format.GeoJSON();
var features_Localidades_2 = format_Localidades_2.readFeatures(json_Localidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_2.addFeatures(features_Localidades_2);
var lyr_Localidades_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_2, 
                style: style_Localidades_2,
                popuplayertitle: 'Localidades',
                interactive: true,
                title: '<img src="styles/legend/Localidades_2.png" /> Localidades'
            });
var format_AtencionPsicosocial_3 = new ol.format.GeoJSON();
var features_AtencionPsicosocial_3 = format_AtencionPsicosocial_3.readFeatures(json_AtencionPsicosocial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtencionPsicosocial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtencionPsicosocial_3.addFeatures(features_AtencionPsicosocial_3);
var lyr_AtencionPsicosocial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtencionPsicosocial_3, 
                style: style_AtencionPsicosocial_3,
                popuplayertitle: 'Atencion Psicosocial',
                interactive: true,
                title: '<img src="styles/legend/AtencionPsicosocial_3.png" /> Atencion Psicosocial'
            });
var format_ColectivosAmbientalCulturales_4 = new ol.format.GeoJSON();
var features_ColectivosAmbientalCulturales_4 = format_ColectivosAmbientalCulturales_4.readFeatures(json_ColectivosAmbientalCulturales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColectivosAmbientalCulturales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColectivosAmbientalCulturales_4.addFeatures(features_ColectivosAmbientalCulturales_4);
var lyr_ColectivosAmbientalCulturales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColectivosAmbientalCulturales_4, 
                style: style_ColectivosAmbientalCulturales_4,
                popuplayertitle: 'Colectivos Ambiental Culturales',
                interactive: true,
                title: '<img src="styles/legend/ColectivosAmbientalCulturales_4.png" /> Colectivos Ambiental Culturales'
            });
var format_Colegios_5 = new ol.format.GeoJSON();
var features_Colegios_5 = format_Colegios_5.readFeatures(json_Colegios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colegios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colegios_5.addFeatures(features_Colegios_5);
var lyr_Colegios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colegios_5, 
                style: style_Colegios_5,
                popuplayertitle: 'Colegios',
                interactive: true,
                title: '<img src="styles/legend/Colegios_5.png" /> Colegios'
            });
var format_ComunidadBarrial_6 = new ol.format.GeoJSON();
var features_ComunidadBarrial_6 = format_ComunidadBarrial_6.readFeatures(json_ComunidadBarrial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadBarrial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadBarrial_6.addFeatures(features_ComunidadBarrial_6);
var lyr_ComunidadBarrial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadBarrial_6, 
                style: style_ComunidadBarrial_6,
                popuplayertitle: 'Comunidad Barrial',
                interactive: true,
                title: '<img src="styles/legend/ComunidadBarrial_6.png" /> Comunidad Barrial'
            });
var format_Huertasurbanas_7 = new ol.format.GeoJSON();
var features_Huertasurbanas_7 = format_Huertasurbanas_7.readFeatures(json_Huertasurbanas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huertasurbanas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huertasurbanas_7.addFeatures(features_Huertasurbanas_7);
var lyr_Huertasurbanas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huertasurbanas_7, 
                style: style_Huertasurbanas_7,
                popuplayertitle: 'Huertas urbanas',
                interactive: true,
                title: '<img src="styles/legend/Huertasurbanas_7.png" /> Huertas urbanas'
            });
var format_InstitucionEducacionSuperior_8 = new ol.format.GeoJSON();
var features_InstitucionEducacionSuperior_8 = format_InstitucionEducacionSuperior_8.readFeatures(json_InstitucionEducacionSuperior_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionEducacionSuperior_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionEducacionSuperior_8.addFeatures(features_InstitucionEducacionSuperior_8);
var lyr_InstitucionEducacionSuperior_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionEducacionSuperior_8, 
                style: style_InstitucionEducacionSuperior_8,
                popuplayertitle: 'Institucion Educacion Superior',
                interactive: true,
                title: '<img src="styles/legend/InstitucionEducacionSuperior_8.png" /> Institucion Educacion Superior'
            });
var format_Jovenes_9 = new ol.format.GeoJSON();
var features_Jovenes_9 = format_Jovenes_9.readFeatures(json_Jovenes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jovenes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jovenes_9.addFeatures(features_Jovenes_9);
var lyr_Jovenes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jovenes_9, 
                style: style_Jovenes_9,
                popuplayertitle: 'Jovenes',
                interactive: true,
                title: '<img src="styles/legend/Jovenes_9.png" /> Jovenes'
            });
var format_JuntadeAccionComunal_10 = new ol.format.GeoJSON();
var features_JuntadeAccionComunal_10 = format_JuntadeAccionComunal_10.readFeatures(json_JuntadeAccionComunal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuntadeAccionComunal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuntadeAccionComunal_10.addFeatures(features_JuntadeAccionComunal_10);
var lyr_JuntadeAccionComunal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JuntadeAccionComunal_10, 
                style: style_JuntadeAccionComunal_10,
                popuplayertitle: 'Junta de Accion Comunal',
                interactive: true,
                title: '<img src="styles/legend/JuntadeAccionComunal_10.png" /> Junta de Accion Comunal'
            });
var group_Tipologia = new ol.layer.Group({
                                layers: [lyr_AtencionPsicosocial_3,lyr_ColectivosAmbientalCulturales_4,lyr_Colegios_5,lyr_ComunidadBarrial_6,lyr_Huertasurbanas_7,lyr_InstitucionEducacionSuperior_8,lyr_Jovenes_9,lyr_JuntadeAccionComunal_10,],
                                fold: 'close',
                                title: 'Tipologia'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Humedales_1.setVisible(true);lyr_Localidades_2.setVisible(true);lyr_AtencionPsicosocial_3.setVisible(true);lyr_ColectivosAmbientalCulturales_4.setVisible(true);lyr_Colegios_5.setVisible(true);lyr_ComunidadBarrial_6.setVisible(true);lyr_Huertasurbanas_7.setVisible(true);lyr_InstitucionEducacionSuperior_8.setVisible(true);lyr_Jovenes_9.setVisible(true);lyr_JuntadeAccionComunal_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Humedales_1,lyr_Localidades_2,group_Tipologia];
lyr_Humedales_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'acto_admin': 'acto_admin', 'fecha_acto': 'fecha_acto', 'escala': 'escala', 'estado_pro': 'estado_pro', 'area_ha': 'area_ha', 'fecha_ingr': 'fecha_ingr', 'fecha_reco': 'fecha_reco', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Localidades_2.set('fieldAliases', {'LocNombre': 'LocNombre', 'LocAAdmini': 'LocAAdmini', 'LocArea': 'LocArea', 'LocCodigo': 'LocCodigo', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AtencionPsicosocial_3.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_ColectivosAmbientalCulturales_4.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_Colegios_5.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_ComunidadBarrial_6.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_Huertasurbanas_7.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_InstitucionEducacionSuperior_8.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_Jovenes_9.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_JuntadeAccionComunal_10.set('fieldAliases', {'Localidad': 'Localidad', 'Tipología': 'Tipología', 'Eje temáti': 'Eje temáti', 'Barrio': 'Barrio', 'Y': 'Y', 'X': 'X', 'Tipologia': 'Tipologia', });
lyr_Humedales_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'acto_admin': 'TextEdit', 'fecha_acto': 'DateTime', 'escala': 'TextEdit', 'estado_pro': 'TextEdit', 'area_ha': 'TextEdit', 'fecha_ingr': 'DateTime', 'fecha_reco': 'DateTime', 'globalid': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Localidades_2.set('fieldImages', {'LocNombre': 'TextEdit', 'LocAAdmini': 'TextEdit', 'LocArea': 'TextEdit', 'LocCodigo': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AtencionPsicosocial_3.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_ColectivosAmbientalCulturales_4.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_Colegios_5.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_ComunidadBarrial_6.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_Huertasurbanas_7.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_InstitucionEducacionSuperior_8.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_Jovenes_9.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_JuntadeAccionComunal_10.set('fieldImages', {'Localidad': '', 'Tipología': '', 'Eje temáti': '', 'Barrio': '', 'Y': '', 'X': '', 'Tipologia': '', });
lyr_Humedales_1.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'acto_admin': 'no label', 'fecha_acto': 'no label', 'escala': 'no label', 'estado_pro': 'no label', 'area_ha': 'no label', 'fecha_ingr': 'no label', 'fecha_reco': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Localidades_2.set('fieldLabels', {'LocNombre': 'no label', 'LocAAdmini': 'no label', 'LocArea': 'no label', 'LocCodigo': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AtencionPsicosocial_3.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_ColectivosAmbientalCulturales_4.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_Colegios_5.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_ComunidadBarrial_6.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_Huertasurbanas_7.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_InstitucionEducacionSuperior_8.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_Jovenes_9.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_JuntadeAccionComunal_10.set('fieldLabels', {'Localidad': 'no label', 'Tipología': 'no label', 'Eje temáti': 'no label', 'Barrio': 'no label', 'Y': 'no label', 'X': 'no label', 'Tipologia': 'no label', });
lyr_JuntadeAccionComunal_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});