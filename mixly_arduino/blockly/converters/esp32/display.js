'use strict';

/*
这个部分存在的问题有：
1. display.show()的我都没写，不知道为什么不可行，没找到原因
2. 内置图像、合并图像
3. rgb灯设置管脚的时候，依旧出现了管脚被自动识别成变量的问题
4. rgb灯号的那个块不会做……
*/

pbc.moduleFunctionD.get('display')['show'] = function(py2block, func, args, keywords, starargs, kwargs, node){
    if (args.length !== 2){
        throw new Error("Incorrect number of arguments");
    }
    var strblock= null;
    var delayblock=null;

    strblock=py2block.convert(args[0]);
    delayblock=py2block.convert(args[1]);

    return block[("monitor_show_scroll_string", func.lineno, {'MODE': 'show'}, {
        'data':strblock,
        'time':delayblock,
    }, {
        "inline": "true"
    })];
}

pbc.globalFunctionD['Image'] = function (py2block, func, args, keywords, starargs, kwargs, node) {
    if (args.length !== 1 || args[0]._astname != "Str") {
        throw new Error("Incorrect number of arguments");
    }
    var colours = [
        "#000000",
        "#ff0000",
    ];
    var flag = 0;
    var tempblock = py2block.Str_value(args[0]);
    var temptext = new Array();
    temptext = tempblock.split(':');

    if (temptext.length == 8) {
        for (var i = 0; i < 8; i++) {
            if (temptext[i].length == 16) {
                flag++;
            }
        }
    }
    if (flag == 8) {
        return block('microbit_image_create', func.lineno, {
                "00": colours[temptext[0].charAt(0)],
                "01": colours[temptext[0].charAt(1)],
                "02": colours[temptext[0].charAt(2)],
                "03": colours[temptext[0].charAt(3)],
                "04": colours[temptext[0].charAt(4)],
                "05": colours[temptext[0].charAt(5)],
                "06": colours[temptext[0].charAt(6)],
                "07": colours[temptext[0].charAt(7)],
                "08": colours[temptext[0].charAt(8)],
                "09": colours[temptext[0].charAt(9)],
                "0a": colours[temptext[0].charAt(10)],
                "0b": colours[temptext[0].charAt(11)],
                "0c": colours[temptext[0].charAt(12)],
                "0d": colours[temptext[0].charAt(13)],
                "0e": colours[temptext[0].charAt(14)],
                "0f": colours[temptext[0].charAt(15)],

                "10": colours[temptext[1].charAt(0)],
                "11": colours[temptext[1].charAt(1)],
                "12": colours[temptext[1].charAt(2)],
                "13": colours[temptext[1].charAt(3)],
                "14": colours[temptext[1].charAt(4)],
                "15": colours[temptext[1].charAt(5)],
                "16": colours[temptext[1].charAt(6)],
                "17": colours[temptext[1].charAt(7)],
                "18": colours[temptext[1].charAt(8)],
                "19": colours[temptext[1].charAt(9)],
                "1a": colours[temptext[1].charAt(10)],
                "1b": colours[temptext[1].charAt(11)],
                "1c": colours[temptext[1].charAt(12)],
                "1d": colours[temptext[1].charAt(13)],
                "1e": colours[temptext[1].charAt(14)],
                "1f": colours[temptext[1].charAt(15)],

                "20": colours[temptext[2].charAt(0)],
                "21": colours[temptext[2].charAt(1)],
                "22": colours[temptext[2].charAt(2)],
                "23": colours[temptext[2].charAt(3)],
                "24": colours[temptext[2].charAt(4)],
                "25": colours[temptext[2].charAt(5)],
                "26": colours[temptext[2].charAt(6)],
                "27": colours[temptext[2].charAt(7)],
                "28": colours[temptext[2].charAt(8)],
                "29": colours[temptext[2].charAt(9)],
                "2a": colours[temptext[2].charAt(10)],
                "2b": colours[temptext[2].charAt(11)],
                "2c": colours[temptext[2].charAt(12)],
                "2d": colours[temptext[2].charAt(13)],
                "2e": colours[temptext[2].charAt(14)],
                "2f": colours[temptext[2].charAt(15)],

                "30": colours[temptext[3].charAt(0)],
                "31": colours[temptext[3].charAt(1)],
                "32": colours[temptext[3].charAt(2)],
                "33": colours[temptext[3].charAt(3)],
                "34": colours[temptext[3].charAt(4)],
                "35": colours[temptext[3].charAt(5)],
                "36": colours[temptext[3].charAt(6)],
                "37": colours[temptext[3].charAt(7)],
                "38": colours[temptext[3].charAt(8)],
                "39": colours[temptext[3].charAt(9)],
                "3a": colours[temptext[3].charAt(10)],
                "3b": colours[temptext[3].charAt(11)],
                "3c": colours[temptext[3].charAt(12)],
                "3d": colours[temptext[3].charAt(13)],
                "3e": colours[temptext[3].charAt(14)],
                "3f": colours[temptext[3].charAt(15)],

                "40": colours[temptext[4].charAt(0)],
                "41": colours[temptext[4].charAt(1)],
                "42": colours[temptext[4].charAt(2)],
                "43": colours[temptext[4].charAt(3)],
                "44": colours[temptext[4].charAt(4)],
                "45": colours[temptext[4].charAt(5)],
                "46": colours[temptext[4].charAt(6)],
                "47": colours[temptext[4].charAt(7)],
                "48": colours[temptext[4].charAt(8)],
                "49": colours[temptext[4].charAt(9)],
                "4a": colours[temptext[4].charAt(10)],
                "4b": colours[temptext[4].charAt(11)],
                "4c": colours[temptext[4].charAt(12)],
                "4d": colours[temptext[4].charAt(13)],
                "4e": colours[temptext[4].charAt(14)],
                "4f": colours[temptext[4].charAt(15)],


                "50": colours[temptext[5].charAt(0)],
                "51": colours[temptext[5].charAt(1)],
                "52": colours[temptext[5].charAt(2)],
                "53": colours[temptext[5].charAt(3)],
                "54": colours[temptext[5].charAt(4)],
                "55": colours[temptext[5].charAt(5)],
                "56": colours[temptext[5].charAt(6)],
                "57": colours[temptext[5].charAt(7)],
                "58": colours[temptext[5].charAt(8)],
                "59": colours[temptext[5].charAt(9)],
                "5a": colours[temptext[5].charAt(10)],
                "5b": colours[temptext[5].charAt(11)],
                "5c": colours[temptext[5].charAt(12)],
                "5d": colours[temptext[5].charAt(13)],
                "5e": colours[temptext[5].charAt(14)],
                "5f": colours[temptext[5].charAt(15)],

                "60": colours[temptext[6].charAt(0)],
                "61": colours[temptext[6].charAt(1)],
                "62": colours[temptext[6].charAt(2)],
                "63": colours[temptext[6].charAt(3)],
                "64": colours[temptext[6].charAt(4)],
                "65": colours[temptext[6].charAt(5)],
                "66": colours[temptext[6].charAt(6)],
                "67": colours[temptext[6].charAt(7)],
                "68": colours[temptext[6].charAt(8)],
                "69": colours[temptext[6].charAt(9)],
                "6a": colours[temptext[6].charAt(10)],
                "6b": colours[temptext[6].charAt(11)],
                "6c": colours[temptext[6].charAt(12)],
                "6d": colours[temptext[6].charAt(13)],
                "6e": colours[temptext[6].charAt(14)],
                "6f": colours[temptext[6].charAt(15)],


                "70": colours[temptext[7].charAt(0)],
                "71": colours[temptext[7].charAt(1)],
                "72": colours[temptext[7].charAt(2)],
                "73": colours[temptext[7].charAt(3)],
                "74": colours[temptext[7].charAt(4)],
                "75": colours[temptext[7].charAt(5)],
                "76": colours[temptext[7].charAt(6)],
                "77": colours[temptext[7].charAt(7)],
                "78": colours[temptext[7].charAt(8)],
                "79": colours[temptext[7].charAt(9)],
                "7a": colours[temptext[7].charAt(10)],
                "7b": colours[temptext[7].charAt(11)],
                "7c": colours[temptext[7].charAt(12)],
                "7d": colours[temptext[7].charAt(13)],
                "7e": colours[temptext[7].charAt(14)],
                "7f": colours[temptext[7].charAt(15)],

            }, {}, {
                "inline": "false"
            });
    }
}

pbc.moduleFunctionD.get('display')['get_pixel'] = function(py2block, func, args, keywords, starargs, kwargs, node){
    if (args.length !== 2){
        throw new Error("Incorrect number of arguments");
    }
    var astname = args[0]._astname;
    var astname1 = args[1]._astname;
    var xblock;
    var yblock;
    pbc.pinType = "pins_axis";
    if(astname === "Call" && args[0].func._astname == "Name" && py2block.Name_str(args[0].func) === "int"){ //display.get_pixel(int(0), int(0))
        xblock =  py2block.convert(args[0].args[0]);
    }else{
        xblock =  py2block.convert(args[0]);
    }
    if(astname1 === "Call" && args[1].func._astname == "Name" && py2block.Name_str(args[1].func) === "int"){ //display.get_pixel(int(0), int(0))
        yblock =  py2block.convert(args[1].args[0]);
    }else{
        yblock =  py2block.convert(args[1]);
    }
    pbc.pinType = null;
    return block("monitor_get_pixel", func.lineno, {}, {
        'x':xblock,
        'y':yblock
    }, {
        "inline": "true"
    });
}

pbc.moduleFunctionD.get('display')['set_pixel'] = function(py2block, func, args, keywords, starargs, kwargs, node){
    if (args.length !== 3){
        throw new Error("Incorrect number of arguments");
    }
    var astname = args[0]._astname;
    var astname1 = args[1]._astname;
    pbc.pinType = "pins_brightness";
    var brightblock = py2block.identifier(args[2].n);
    pbc.pinType = null;
    var xblock;
    var yblock;
    pbc.pinType = "pins_axis";
    if(astname === "Call" && args[0].func._astname == "Name" && py2block.Name_str(args[0].func) === "int"){ //display.set_pixel(int(0), int(0))
        xblock =  py2block.convert(args[0].args[0]);
    }else{
        xblock =  py2block.convert(args[0]);
    }
    if(astname1 === "Call" && args[1].func._astname == "Name" && py2block.Name_str(args[1].func) === "int"){ //display.set_pixel(int(0), int(0))
        yblock =  py2block.convert(args[1].args[0]);
    }else{
        yblock =  py2block.convert(args[1]);
    }
    pbc.pinType = null;
    return [block("monitor_bright_point", func.lineno, {"flag":brightblock,}, {
        'x':xblock,
        'y':yblock,
        
    }, {
        "inline": "true"
    })];
}


pbc.moduleFunctionD.get('display')['set_brightness'] = function(py2block, func, args, keywords, starargs, kwargs, node) {
    if(args.length!=1){
        throw new Error("Incorrect number of arguments");
    }
    var brightblock=py2block.convert(args[0]);

    return [block("monitor_bright_screen", func.lineno, {}, {
        'x':brightblock,
        
        
    }, {
        "inline": "true"
    })];
}

pbc.moduleFunctionD.get('display')['get_brightness'] = function(py2block, func, args, keywords, starargs, kwargs, node) {
    if(args.length!=0){
        throw new Error("Incorrect number of arguments");
    }

    return [block("monitor_get_screen_pixel", func.lineno, {}, { 
    }, {
        "inline": "true"
    })];
}

pbc.moduleFunctionD.get('display')['blink_rate'] = function(py2block, func, args, keywords, starargs, kwargs, node) {
    if(args.length!=1){
        throw new Error("Incorrect number of arguments");
    }
    var blinkblock=py2block.convert(args[0]);

    return [block("monitor_blink_rate", func.lineno, {}, { 'x':blinkblock,
    }, {
        "inline": "true"
    })];
}

pbc.moduleFunctionD.get('display')['clear'] = function(py2block, func, args, keywords, starargs, kwargs, node) {
    if(args.length!=0){
        throw new Error("Incorrect number of arguments");
    }
    

    return [block("microbit_display_clear", func.lineno, {}, { 
    }, {
        "inline": "true"
    })];
}

pbc.assignD.get('Rgb')['check_assign'] = function(py2block, node, targets, value) {
    /*if(value._astname != "Call" || value.func._astname != "Attribute" || value.func.value._astname != "Name"){
        return false;
    }*/
    //var moduleName = py2block.Name_str(value.func.value);
    var funcName = py2block.identifier(value.func.id);
    if(value._astname === "Call" /*&& moduleName === "neopixel"*/
        && funcName === "NeoPixel" && value.args.length === 2)
        return true;

    return false;
}


// 存在管脚的问题
pbc.assignD.get('Rgb')['create_block'] = function(py2block, node, targets, value){

    var astname = value.args[0]._astname;
    //var astname1 = args[1]._astname;
    var xblock;
   // var yblock;
    pbc.pinType = "pins_axis";
    if(astname === "Call" && value.args[0].func._astname == "Name" && value.args[0].func.id.v === "Pin"){ //display.get_pixel(int(0), int(0))
        xblock =  py2block.convert(value.args[0].args[0]);
    }else{
        xblock =  py2block.convert(args[0]);
    }
    var rgbblock=py2block.convert(targets[0])
    pbc.pinType = "pins_digital";
    var pinblock = py2block.convert(value.args[0].args[0]);
    pbc.pinType = null;
    var countblock = py2block.convert(value.args[1]);

    return block("display_rgb_init", node.lineno, {}, {
        "SUB":rgbblock,
        "PIN":pinblock,
        "LEDCOUNT":countblock
    });
}


pbc.assignD.get('Rgb[0]')['check_assign'] = function(py2block, node, targets, value) {
    /*if(value._astname != "Call" || value.func._astname != "Attribute" || value.func.value._astname != "Name"){
        return false;
    }*/
    //var moduleName = py2block.Name_str(value.func.value);
    var funcName = py2block.identifier(value.func.id);
    if(value._astname === "Call" /*&& moduleName === "neopixel"*/
        && funcName === "NeoPixel" && value.args.length === 2)
        return true;

    return false;
}


// rgb[0]暂时不知道应该如何解决
pbc.assignD.get('Rgb[0]')['create_block'] = function(py2block, node, targets, value){

    var astname = value.args[0]._astname;
    //var astname1 = args[1]._astname;
    var xblock;
   // var yblock;
    pbc.pinType = "pins_axis";
    if(astname === "Call" && value.args[0].func._astname == "Name" && value.args[0].func.id.v === "Pin"){ //display.get_pixel(int(0), int(0))
        xblock =  py2block.convert(value.args[0].args[0]);
    }else{
        xblock =  py2block.convert(args[0]);
    }
    var rgbblock=py2block.convert(targets[0])
    pbc.pinType = "pins_digital";
    var pinblock = py2block.convert(value.args[0].args[0]);
    pbc.pinType = null;
    var countblock = py2block.convert(value.args[1]);

    return block("display_rgb_init", node.lineno, {}, {
        "SUB":rgbblock,
        "PIN":pinblock,
        "LEDCOUNT":countblock
    });
}

pbc.objectFunctionD.get('write')['rgb'] = function(py2block, func, args, keywords, starargs, kwargs, node) {
    if(args.length!=0){
        throw new Error("Incorrect number of arguments");
    }

    var rgbblock=py2block.convert(func.value);

    return [block("display_rgb_write", func.lineno, {}, { 'SUB':rgbblock,
    }, {
        "inline": "true"
    })];
}