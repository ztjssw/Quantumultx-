/*************************************
@@Zoo

日期:2022.10.12
[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/cs.js
hostname = buy.itunes.apple.com
**************************************/
var objc = JSON.parse($response.body);
      
    objc = 
"{\n  \"environment\": \"Production\",\n  \"receipt\": {\n    \"receipt_type\": \"Production\",\n    \"adam_id\": 653031147,\n    \"app_item_id\": 653031147,\n    \"bundle_id\": \"com.waterminder.waterminder\",\n    \"application_version\": \"781\",\n    \"download_id\": 501774704985020519,\n    \"version_external_identifier\": 852311668,\n    \"receipt_creation_date\": \"2022-09-24 01:25:58 Etc\/GMT\",\n    \"receipt_creation_date_ms\": \"1663982758000\",\n    \"receipt_creation_date_pst\": \"2022-09-23 18:25:58 America\/Los_Angeles\",\n    \"request_date\": \"2022-09-24 01:28:59 Etc\/GMT\",\n    \"request_date_ms\": \"1663982939963\",\n    \"request_date_pst\": \"2022-09-23 18:28:59 America\/Los_Angeles\",\n    \"original_purchase_date\": \"2022-09-24 01:22:14 Etc\/GMT\",\n    \"original_purchase_date_ms\": \"1663982534000\",\n    \"original_purchase_date_pst\": \"2022-09-23 18:22:14 America\/Los_Angeles\",\n    \"original_application_version\": \"781\",\n    \"in_app\": [{\n      \"quantity\": \"1\",\n      \"product_id\": \"waterminder.premiumYearly\",\n      \"transaction_id\": \"310001209854061\",\n      \"original_transaction_id\": \"310001209854061\",\n      \"purchase_date\": \"2022-09-24 01:25:57 Etc\/GMT\",\n      \"purchase_date_ms\": \"1663982757000\",\n      \"purchase_date_pst\": \"2022-09-23 18:25:57 America\/Los_Angeles\",\n      \"original_purchase_date\": \"2022-09-24 01:25:58 Etc\/GMT\",\n      \"original_purchase_date_ms\": \"1663982758000\",\n      \"original_purchase_date_pst\": \"2022-09-23 18:25:58 America\/Los_Angeles\",\n      \"expires_date\": \"2060-10-10 06:45:57 Etc\/GMT\",\n      \"expires_date_ms\": \"2864587557000\",\n      \"expires_date_pst\": \"2060-10-09 18:25:57 America\/Los_Angeles\",\n      \"web_order_line_item_id\": \"310000551816677\",\n      \"is_trial_period\": \"true\",\n      \"is_in_intro_offer_period\": \"false\",\n      \"in_app_ownership_type\": \"PURCHASED\"\n    }]\n  },\n  \"latest_receipt_info\": [{\n    \"quantity\": \"1\",\n    \"product_id\": \"waterminder.premiumYearly\",\n    \"transaction_id\": \"310001209854061\",\n    \"original_transaction_id\": \"310001209854061\",\n    \"purchase_date\": \"2022-09-24 01:25:57 Etc\/GMT\",\n    \"purchase_date_ms\": \"1663982757000\",\n    \"purchase_date_pst\": \"2022-09-23 18:25:57 America\/Los_Angeles\",\n    \"original_purchase_date\": \"2022-09-24 01:25:58 Etc\/GMT\",\n    \"original_purchase_date_ms\": \"1663982758000\",\n    \"original_purchase_date_pst\": \"2022-09-23 18:25:58 America\/Los_Angeles\",\n    \"expires_date\": \"2060-10-09 18:25:57 Etc\/GMT\",\n    \"expires_date_ms\": \"2864587557000\",\n    \"expires_date_pst\": \"2060-10-10 06:45:57 America\/Los_Angeles\",\n    \"web_order_line_item_id\": \"310000551816677\",\n    \"is_trial_period\": \"true\",\n    \"is_in_intro_offer_period\": \"false\",\n    \"in_app_ownership_type\": \"PURCHASED\",\n    \"subscription_group_identifier\": \"21006599\"\n  }],\n  \"latest_receipt\": \"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\/pn+\/8Jr9VterHNRSQhWicxDkMyOgQLQoJe2XLGhaWmHkBBoJiY5uB0Qc7AKXcVz0N92O9gt2Yge4+wHz+KO0NP6JlWB7+IDSSMCAwEAAaOCAdcwggHTMD8GCCsGAQUFBwEBBDMwMTAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy13d2RyMDQwHQYDVR0OBBYEFJGknPzEdrefoIr0TfWPNl3tKwSFMAwGA1UdEwEB\/wQCMAAwHwYDVR0jBBgwFoAUiCcXCam2GGCL7Ou69kdZxVJUo7cwggEeBgNVHSAEggEVMIIBETCCAQ0GCiqGSIb3Y2QFBgEwgf4wgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wNgYIKwYBBQUHAgEWKmh0dHA6Ly93d3cuYXBwbGUuY29tL2NlcnRpZmljYXRlYXV0aG9yaXR5LzAOBgNVHQ8BAf8EBAMCB4AwEAYKKoZIhvdjZAYLAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAA2mG9MuPeNbKwduQpZs0+iMQzCCX+Bc0Y2+vQ+9GvwlktuMhcOAWd\/j4tcuBRSsDdu2uP78NS58y60Xa45\/H+R3ubFnlbQTXqYZhnb4WiCV52OMD3P86O3GH66Z+GVIXKDgKDrAEDctuaAEOR9zucgF\/fLefxoqKm4rAfygIFzZ630npjP49ZjgvkTbsUxn\/G4KT8niBqjSl\/OnjmtRolqEdWXRFgRi48Ff9Qipz2jZkgDJwYyz+I0AZLpYYMB8r491ymm5WyrWHWhumEL1TKc3GZvMOxx6GUPzo22\/SGAGDDaSK+zeGLUR2i0j0I78oGmcFxuegHs5R0UwYS\/HE6gwggQiMIIDCqADAgECAggB3rzEOW2gEDANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMTMwMjA3MjE0ODQ3WhcNMjMwMjA3MjE0ODQ3WjCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMo4VKbLVqrIJDlI6Yzu7F+4fyaRvDRTes58Y4Bhd2RepQcjtjn+UC0VVlhwLX7EbsFKhT4v8N6EGqFXya97GP9q+hUSSRUIGayq2yoy7ZZjaFIVPYyK7L9rGJXgA6wBfZcFZ84OhZU3au0Jtq5nzVFkn8Zc0bxXbmc1gHY2pIeBbjiP2CsVTnsl2Fq\/ToPBjdKT1RpxtWCcnTNOVfkSWAyGuBYNweV3RY1QSLorLeSUheHoxJ3GaKWwo\/xnfnC6AllLd0KRObn1zeFM78A7SIym5SFd\/Wpqu6cWNWDS5q3zRinJ6MOL6XnAamFnFbLw\/eVovGJfbs+Z3e8bY\/6SZasCAwEAAaOBpjCBozAdBgNVHQ4EFgQUiCcXCam2GGCL7Ou69kdZxVJUo7cwDwYDVR0TAQH\/BAUwAwEB\/zAfBgNVHSMEGDAWgBQr0GlHlHYJ\/vRrjS5ApvdHTX8IXjAuBgNVHR8EJzAlMCOgIaAfhh1odHRwOi8vY3JsLmFwcGxlLmNvbS9yb290LmNybDAOBgNVHQ8BAf8EBAMCAYYwEAYKKoZIhvdjZAYCAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAE\/P71m+LPWybC+P7hOHMugFNahui33JaQy52Re8dyzUZ+L9mm06WVzfgwG9sq4qYXKxr83DRTCPo4MNzh1HtPGTiqN0m6TDmHKHOz6vRQuSVLkyu5AYU2sKThC22R1QbCGAColOV4xrWzw9pv3e9w0jHQtKJoc\/upGSTKQZEhltV\/V6WId7aIrkhoxK6+JJFKql3VUAqa67SzCu4aCxvCmA5gl35b40ogHKf9ziCuY7uLvsumKV8wVjQYLNDzsdTJWk26v5yZXpT+RN5yaZgem8+bQp0gF6ZuEujPYhisX4eOGBrr\/TkJ2prfOv\/TgalmcwHFGlXOxxioK0bA8MFR8wggS7MIIDo6ADAgECAgECMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0wNjA0MjUyMTQwMzZaFw0zNTAyMDkyMTQwMzZaMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSRqQkfkdseR1DrBe1eeYQt6zaiV0xV7IsZid75S2z1B6siMALoGD74UAnTf0GomPnRymacJGsR0KO75Bsqwx+VnnoMpEeLW9QWNzPLxA9NzhRp0ckZcvVdDtV\/X5vyJQO6VY9NXQ3xZDUjFUsVWR2zlPf2nJ7PULrBWFBnjwi0IPfLrCwgb3C2PwEwjLdDzw+dPfMrSSgayP7OtbkO2V4c1ss9tTqt9A8OAJILsSEWLnTVPA3bYharo3GSR1NVwa8vQbP4++NwzeajTEV+H0xrUJZBicR0YgsQg0GHM4qBsTBY7FoEMoxos48d3mVz\/2deZbxJ2HafMxRloXeUyS0CAwEAAaOCAXowggF2MA4GA1UdDwEB\/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH\/MB0GA1UdDgQWBBQr0GlHlHYJ\/vRrjS5ApvdHTX8IXjAfBgNVHSMEGDAWgBQr0GlHlHYJ\/vRrjS5ApvdHTX8IXjCCAREGA1UdIASCAQgwggEEMIIBAAYJKoZIhvdjZAUBMIHyMCoGCCsGAQUFBwIBFh5odHRwczovL3d3dy5hcHBsZS5jb20vYXBwbGVjYS8wgcMGCCsGAQUFBwICMIG2GoGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wDQYJKoZIhvcNAQEFBQADggEBAFw2mUwteLftjJvc83eb8nbSdzBPwR+Fg4UbmT1HN\/Kpm0COLNSxkBLYvvRzm+7SZA\/LeU802KI++Xj\/a8gH7H05g4tTINM4xLG\/mk8Ka\/8r\/FmnBQl8F0BWER5007eLIztHo9VvJOLr0bdw3w9F4SfK8W147ee1Fxeo3H4iNcol1dkP1mvUoiQjEfehrI9zgWDGG1sJL5Ky+ERI8GA4nhX1PSZnIIozavcNgs\/e66Mv+VNqW2TAYzN39zoHLFbr2g8hDtq6cxlPtdk2f8GHVdmnmbkyQvvY1XGefqFStxu9k0IkEirHDx22TZxeY8hLgBdQqorV2uT80AkHN7B1dSExggHLMIIBxwIBATCBozCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eQIIDutXh+eeCY0wCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQBzc2xZrXFaY3wQpbpMA6VCJuOh4BXToJLzSRTmlKls9+zt2K\/rV45xrILUA2Q5CcsyqwqdgqXq5q0A3MXSwL0v+v8gOaDCGer0etkc2F4\/oyQd+6984Xe5o4BDnUDR5718kMqEJfEwM0FhlLb+U0PjkogQ5vsqVo8PLrxPC4PRIC3AtjItnWuGSWaq\/lklwBZYOSRRRn3Dal909tSBFiuhBl5nRB5+7+zHoyoJ3Pg8lmGdndmiDsy5UA9KFDxURrh3jc+OuY87QuFeR+jfshvmWzBJnD\/qR4IK6sXuOZga4gJxSl2kH3dN8a7ZHzqXmf9Ui+qLNxNl77mx+PbW6vC2\",\n  \"pending_renewal_info\": [{\n    \"auto_renew_product_id\": \"waterminder.premiumYearly\",\n    \"product_id\": \"waterminder.premiumYearly\",\n    \"original_transaction_id\": \"310001209854061\",\n    \"auto_renew_status\": \"0\"\n  }],\n  \"status\": 0\n}";
$done({body : JSON.stringify(objc)});
