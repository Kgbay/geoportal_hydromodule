ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3395").setExtent([4906255.137446, 4863179.056771, 10579043.607937, 7487506.433306]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'области',
                interactive: true,
    title: 'области<br />\
    <img src="styles/legend/_1_0.png" /> Абайская область<br />\
    <img src="styles/legend/_1_1.png" /> Акмолинская область<br />\
    <img src="styles/legend/_1_2.png" /> Актюбинская область<br />\
    <img src="styles/legend/_1_3.png" /> Алматинская область<br />\
    <img src="styles/legend/_1_4.png" /> Алматы<br />\
    <img src="styles/legend/_1_5.png" /> Атырауская область<br />\
    <img src="styles/legend/_1_6.png" /> Восточно-Казахстанская область<br />\
    <img src="styles/legend/_1_7.png" /> Жамбылская область<br />\
    <img src="styles/legend/_1_8.png" /> Жетысуская область<br />\
    <img src="styles/legend/_1_9.png" /> Западно-Казахстанская область<br />\
    <img src="styles/legend/_1_10.png" /> Карагандинская область<br />\
    <img src="styles/legend/_1_11.png" /> Костанайская область<br />\
    <img src="styles/legend/_1_12.png" /> Кызылординская область<br />\
    <img src="styles/legend/_1_13.png" /> Мангистауская область<br />\
    <img src="styles/legend/_1_14.png" /> Нур-Султан<br />\
    <img src="styles/legend/_1_15.png" /> Павлодарская область<br />\
    <img src="styles/legend/_1_16.png" /> Северо-Казахстанская область<br />\
    <img src="styles/legend/_1_17.png" /> Туркестанская область<br />\
    <img src="styles/legend/_1_18.png" /> Улытауская область<br />\
    <img src="styles/legend/_1_19.png" /> Шымкент<br />\
    <img src="styles/legend/_1_20.png" /> <br />' });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: 'железная_дорога',
                interactive: true,
                title: '<img src="styles/legend/__2.png" /> железная_дорога'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: 'населенные_пункты',
                interactive: true,
    title: 'населенные_пункты<br />\
    <img src="styles/legend/__3_0.png" /> city<br />\
    <img src="styles/legend/__3_1.png" /> county<br />\
    <img src="styles/legend/__3_2.png" /> farm<br />\
    <img src="styles/legend/__3_3.png" /> hamlet<br />\
    <img src="styles/legend/__3_4.png" /> island<br />\
    <img src="styles/legend/__3_5.png" /> locality<br />\
    <img src="styles/legend/__3_6.png" /> national_capital<br />\
    <img src="styles/legend/__3_7.png" /> suburb<br />\
    <img src="styles/legend/__3_8.png" /> town<br />\
    <img src="styles/legend/__3_9.png" /> village<br />\
    <img src="styles/legend/__3_10.png" /> <br />' });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: 'водные_объекты',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> водные_объекты'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'районы',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> районы'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Казахстан',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Казахстан'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr__1.setVisible(true);lyr___2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr__1,lyr___2,lyr___3,lyr___4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'local_name': 'local_name', 'sqr': 'sqr', });
lyr___2.set('fieldAliases', {'name': 'name', });
lyr___3.set('fieldAliases', {'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr___4.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr__5.set('fieldAliases', {'local_name': 'local_name', 'sqr': 'sqr', });
lyr__6.set('fieldAliases', {'local_name': 'local_name', });
lyr__1.set('fieldImages', {'local_name': 'TextEdit', 'sqr': 'TextEdit', });
lyr___2.set('fieldImages', {'name': 'TextEdit', });
lyr___3.set('fieldImages', {'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr___4.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr__5.set('fieldImages', {'local_name': 'TextEdit', 'sqr': 'TextEdit', });
lyr__6.set('fieldImages', {'local_name': 'TextEdit', });
lyr__1.set('fieldLabels', {'local_name': 'no label', 'sqr': 'no label', });
lyr___2.set('fieldLabels', {'name': 'no label', });
lyr___3.set('fieldLabels', {'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr___4.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr__5.set('fieldLabels', {'local_name': 'no label', 'sqr': 'no label', });
lyr__6.set('fieldLabels', {'local_name': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});