const relationships = ['本人', '妻', '夫', '父', '母', '祖父', '祖母', '曾祖父', '曾祖母', '兄', '弟', '姉', '妹', '長男', '二男', '三男', '四男', '五男', '長女', '二女', '三女', '四女', '五女'] as const;
export type Relationship = typeof relationships[number];

/**
 * 老親等の判定
 * @param relationship 続柄
 * @returns 判定結果
 */
export const isLinealAscendants = (relationship: Relationship) => {
    switch (relationship) {
        case '父':
        case '母':
        case '祖父':
        case '祖母':
        case '曾祖父':
        case '曾祖母':
            return true;
        default:
            return false;            
    }
};

/**
 * 子の判定
 * @param relationship 続柄
 * @returns 判定結果
 */
export const isChild = (relationship: Relationship) => {
    switch (relationship) {
        case '長男':
        case '二男':
        case '三男':
        case '四男':
        case '五男':
        case '長女':
        case '二女':
        case '三男':
        case '四男':
        case '五男':
            return true;
        default:
            return false;            
    }
};

