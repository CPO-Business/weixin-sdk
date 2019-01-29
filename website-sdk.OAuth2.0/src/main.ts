export interface WXWebsiteConfig {
    appid: string;
    redirect_uri: string;
    scope: string;
    response_type: string;
    /**
     * 该参数为防止 csrf攻击（跨站请求伪造攻击） 建议填写。回调时会带上该参数，用于验证
     */
    state?: string;

    /**
     * authorization_code
     */
    grant_type: string;

    /**
     * secret 应用密钥AppSecret，在微信开放平台提交应用审核通过后获得
     */
    secret: string;
}

export interface LoginCallback {
    /**
     * 若用户禁止登录授权，则没有该参数返回
     */
    code?: string;

    state?: string;
}

export interface GetAccessTokenCallback {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    /**
     * 授权用户唯一标识
     */
    openid: string;
    /**
     * 用户授权的作用域，使用逗号（,）分隔
     */
    scope: string;
    /**
     * 当且仅当该网站应用已获得该用户的userinfo授权时，才会出现该字段。
     */
    unionid?: string;

    errcode?: number;

    errmsg?: string;
}
export interface RefreshAccessTokenCallback {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    /**
     * 授权用户唯一标识
     */
    openid: string;
    /**
     * 用户授权的作用域，使用逗号（,）分隔
     */
    scope: string;

    errcode?: number;

    errmsg?: string;
}
export interface CheckAccessTokenCallback {
    /**
     * 正确为0
     */
    errcode: number;
    errmsg: string;
}
export interface GetUserInfoCallback {
    openid: string;
    nickname: string;
    sex: number;
    province: string;
    city: string;
    country: string;
    headimgurl: string;
    /**
     * 用户特权信息，json数组，如微信沃卡用户为（chinaunicom）
     */
    privilege: string[];
    unionid: string;

    errcode: number;
    errmsg: string;
}
export class WXWebsite {
    private access_token: string;
    private refresh_token: string;
    private openid: string;
    private scope: string;
    private unionid: string;
    constructor(private config: WXWebsiteConfig) {

    }

    Login() {


    }

    private GetAccessToken(code: string) {

    }

    private RefreshAccessToken() {

    }
    private CheckAccessToken(access_token: string, openid: string) {

    }
    /**
     * 
     * @param access_token 
     * @param openid 
     * @param lang zh_CN 简体，zh_TW 繁体，en 英语，默认为zh-CN
     */
    public GetUserInfo(access_token: string, openid: string, lang?: string) {

    }
}