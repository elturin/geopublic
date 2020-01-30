var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_piscigranjas_1 = new ol.format.GeoJSON();
var features_piscigranjas_1 = format_piscigranjas_1.readFeatures(json_piscigranjas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piscigranjas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piscigranjas_1.addFeatures(features_piscigranjas_1);
var lyr_piscigranjas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piscigranjas_1, 
                style: style_piscigranjas_1,
                interactive: true,
                title: '<img src="styles/legend/piscigranjas_1.png" /> piscigranjas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_piscigranjas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_piscigranjas_1];
lyr_piscigranjas_1.set('fieldAliases', {'E': 'E', 'N': 'N', 'NOMBRE_DEL': 'NOMBRE_DEL', 'NOMBRE_DE': 'NOMBRE_DE', 'Caserio': 'Caserio', 'CENTRO_POB': 'CENTRO_POB', 'DISTRITO': 'DISTRITO', 'SUPERF__CR': 'SUPERF__CR', 'ESPECIE_CU': 'ESPECIE_CU', 'NIVEL_DE_P': 'NIVEL_DE_P', 'Ndeg_RESOL': 'Ndeg_RESOL', 'ANO': 'ANO', 'F13': 'F13', 'AMBITO': 'AMBITO', });
lyr_piscigranjas_1.set('fieldImages', {'E': 'TextEdit', 'N': 'TextEdit', 'NOMBRE_DEL': 'TextEdit', 'NOMBRE_DE': 'TextEdit', 'Caserio': 'TextEdit', 'CENTRO_POB': 'TextEdit', 'DISTRITO': 'TextEdit', 'SUPERF__CR': 'TextEdit', 'ESPECIE_CU': 'TextEdit', 'NIVEL_DE_P': 'TextEdit', 'Ndeg_RESOL': 'TextEdit', 'ANO': 'TextEdit', 'F13': 'TextEdit', 'AMBITO': 'TextEdit', });
lyr_piscigranjas_1.set('fieldLabels', {'E': 'no label', 'N': 'no label', 'NOMBRE_DEL': 'no label', 'NOMBRE_DE': 'no label', 'Caserio': 'no label', 'CENTRO_POB': 'no label', 'DISTRITO': 'no label', 'SUPERF__CR': 'no label', 'ESPECIE_CU': 'no label', 'NIVEL_DE_P': 'no label', 'Ndeg_RESOL': 'no label', 'ANO': 'no label', 'F13': 'no label', 'AMBITO': 'no label', });
lyr_piscigranjas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});