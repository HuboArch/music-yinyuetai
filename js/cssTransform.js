/**
 * Created by dean on 2017/3/29.
 */

function cssTransform(el, attr, val) {

    if (!el.transform) {
        el.transform = {};
    }

    if (arguments.length === 3) {
        // 三个参数设置DOM元素的transform属性
        var tempStore = '';

        el.transform[attr] = val;

        for (var prop in el.transform) {

            switch (prop) {
                case 'rotate':
                case 'skewX':
                case 'skewY':
                    tempStore += prop + '(' + el.transform[prop] + 'deg) ';
                    break;
                case 'translateX':
                case 'translateY':
                    tempStore += prop + '(' + el.transform[prop] + 'px) ';
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    tempStore += prop + '(' + el.transform[prop] + ')';
                    break;
            }
        }

        el.style.WebkitTransform = el.style.transform = tempStore;

    } else if (arguments.length === 2) {
        // 两个参数获取DOM元素transform属性
        if (el.transform[attr] === undefined) {
            return attr === ('scale' || 'scaleX' || 'scaleY') ? 1 : 0;
        } else {
            return el.transform[attr];
        }
    }
}
