export const environment = {
    production: false,
    apiBaseUrl: "https://dld-dev-qbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "877118e3-5fc5-4d6c-ba06-e753988e1458",
        clientId: "9c5e5593-1590-4346-9509-b6b4360aff0e",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
