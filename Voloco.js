/**********************************************
@@Zoo
Voloco解锁订阅
日期:2022.11.26
[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Voloco.js
hostname = buy.itunes.apple.com
**********************************************/
var body = $response.body.replace(/.+/g, '"{\n  \"environment\" : \"Production\",\n  \"receipt\" : {\n    \"receipt_type\" : \"Production\",\n    \"app_item_id\" : 1052970183,\n    \"receipt_creation_date\" : \"2022-11-26 03:14:07 Etc\/GMT\",\n    \"bundle_id\" : \"com.resonantcavity.Voloco\",\n    \"original_purchase_date\" : \"2022-11-26 03:11:40 Etc\/GMT\",\n    \"in_app\" : [\n      {\n        \"quantity\" : \"1\",\n        \"purchase_date_ms\" : \"1669432446000\",\n        \"expires_date\" : \"2276-06-07 03:14:06 Etc\/GMT\",\n        \"expires_date_pst\" : \"2276-06-07 01:27:26 America\/Los_Angeles\",\n        \"is_in_intro_offer_period\" : \"false\",\n        \"transaction_id\" : \"310001264742367\",\n        \"is_trial_period\" : \"true\",\n        \"original_transaction_id\" : \"310001264742367\",\n        \"purchase_date\" : \"2022-11-26 03:14:06 Etc\/GMT\",\n        \"product_id\" : \"jean_laroche\",\n        \"original_purchase_date_pst\" : \"2022-11-25 19:14:07 America\/Los_Angeles\",\n        \"in_app_ownership_type\" : \"PURCHASED\",\n        \"original_purchase_date_ms\" : \"1669432447000\",\n        \"web_order_line_item_id\" : \"310000582135105\",\n        \"expires_date_ms\" : \"9670037246000\",\n        \"purchase_date_pst\" : \"2022-11-25 19:14:06 America\/Los_Angeles\",\n        \"original_purchase_date\" : \"2022-11-26 03:14:07 Etc\/GMT\"\n      }\n    ],\n    \"adam_id\" : 1052970183,\n    \"receipt_creation_date_pst\" : \"2022-11-25 19:14:07 America\/Los_Angeles\",\n    \"request_date\" : \"2022-11-26 03:18:42 Etc\/GMT\",\n    \"request_date_pst\" : \"2022-11-25 19:18:42 America\/Los_Angeles\",\n    \"version_external_identifier\" : 852911332,\n    \"request_date_ms\" : \"1669432722953\",\n    \"original_purchase_date_pst\" : \"2022-11-25 19:11:40 America\/Los_Angeles\",\n    \"application_version\" : \"418\",\n    \"original_purchase_date_ms\" : \"1669432300000\",\n    \"receipt_creation_date_ms\" : \"1669432447000\",\n    \"original_application_version\" : \"418\",\n    \"download_id\" : 501953283255391972\n  },\n  \"pending_renewal_info\" : [\n    {\n      \"product_id\" : \"jean_laroche\",\n      \"original_transaction_id\" : \"310001264742367\",\n      \"auto_renew_product_id\" : \"jean_laroche\",\n      \"auto_renew_status\" : \"0\"\n    }\n  ],\n  \"status\" : 0,\n  \"latest_receipt_info\" : [\n    {\n      \"quantity\" : \"1\",\n      \"purchase_date_ms\" : \"1669432446000\",\n      \"expires_date\" : \"2276-06-07 03:14:06 Etc\/GMT\",\n      \"expires_date_pst\" : \"2276-06-07 01:27:26 America\/Los_Angeles\",\n      \"is_in_intro_offer_period\" : \"false\",\n      \"transaction_id\" : \"310001264742367\",\n      \"is_trial_period\" : \"true\",\n      \"original_transaction_id\" : \"310001264742367\",\n      \"purchase_date\" : \"2022-11-26 03:14:06 Etc\/GMT\",\n      \"product_id\" : \"jean_laroche\",\n      \"original_purchase_date_pst\" : \"2022-11-25 19:14:07 America\/Los_Angeles\",\n      \"in_app_ownership_type\" : \"PURCHASED\",\n      \"subscription_group_identifier\" : \"20457661\",\n      \"original_purchase_date_ms\" : \"1669432447000\",\n      \"web_order_line_item_id\" : \"310000582135105\",\n      \"expires_date_ms\" : \"9670037246000\",\n      \"purchase_date_pst\" : \"2022-11-25 19:14:06 America\/Los_Angeles\",\n      \"original_purchase_date\" : \"2022-11-26 03:14:07 Etc\/GMT\"\n    }\n  ],\n  \"latest_receipt\" : \"MIIUGgYJKoZIhvcNAQcCoIIUCzCCFAcCAQExCzAJBgUrDgMCGgUAMIIDuwYJKoZIhvcNAQcBoIIDrASCA6gxggOkMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEOAgEBBAQCAgEAMA0CAQMCAQEEBQwDNDE4MA0CAQoCAQEEBRYDMTIrMA0CAQ0CAQEEBQIDAkxJMA0CARMCAQEEBQwDNDE4MA4CAQECAQEEBgIEPsMMxzAOAgEJAgEBBAYCBFAyNTYwDgIBCwIBAQQGAgQHBHNYMA4CARACAQEEBgIEMtZk5DASAgEPAgEBBAoCCAb3S9oGR1bkMBQCAQACAQEEDAwKUHJvZHVjdGlvbjAYAgEEAgECBBB7fTDVrL63woSGuXwztvZzMBwCAQUCAQEEFME78swAA17Otj1OkmeY79MupFanMB4CAQgCAQEEFhYUMjAyMi0xMS0yNlQwMzoxNDowN1owHgIBDAIBAQQWFhQyMDIyLTExLTI2VDAzOjE4OjQyWjAeAgESAgEBBBYWFDIwMjItMTEtMjZUMDM6MTE6NDBaMCMCAQICAQEEGwwZY29tLnJlc29uYW50Y2F2aXR5LlZvbG9jbzBFAgEGAgEBBD0RK+q+AYH1IRqNUrvtdrCuoJt86VUzXNeQphiuCNzGnwoewBtISaQwbGmtFACFJVzdHAfuSpdGMSFelVotMEUCAQcCAQEEPdomE4h69WqRC7ycksb+fsR2SQ2nMVWAmj5+JbRrk7relkjVrlI7ZJ2gYDI\/6DaLOljH5bNXNmkXhOSCuBAwggGIAgERAgEBBIIBfjGCAXowCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQAwDAICBroCAQEEAwIBADAPAgIGrgIBAQQGAgRS5OWpMBICAgavAgEBBAkCBwEZ8aKUDUEwFwICBqYCAQEEDgwMamVhbl9sYXJvY2hlMBoCAganAgEBBBEMDzMxMDAwMTI2NDc0MjM2NzAaAgIGqQIBAQQRDA8zMTAwMDEyNjQ3NDIzNjcwHwICBqgCAQEEFhYUMjAyMi0xMS0yNlQwMzoxNDowNlowHwICBqoCAQEEFhYUMjAyMi0xMS0yNlQwMzoxNDowN1owHwICBqwCAQEEFhYUMjAyMi0xMi0wM1QwMzoxNDowNlqggg5lMIIFfDCCBGSgAwIBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B\/SWigVvWh+0j2jMcjuIjwKXEJss9xp\/sSg1Vhv+kAteXyjlUbX1\/slQYncQsUnGOZHuCzom6SdYI5bSIcc8\/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB\/T5vysH1PKmPUhrAJQp2Dt7+mf7\/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0\/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc\/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH\/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB\/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB\/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a\/CWS24yFw4BZ3+Pi1y4FFKwN27a4\/vw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc\/zo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5\/GioqbisB\/KAgXNnrfSemM\/j1mOC+RNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV\/1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ\/Ojbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h\/JpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi\/w3oQaoVfJr3sY\/2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI\/YKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V+RJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj\/Gd+cLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj\/pJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH\/MB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB\/wQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8\/vWb4s9bJsL4\/uE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN+DAb2yriphcrGvzcNFMI+jgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m\/d73DSMdC0omhz+6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp\/3OIK5ju4u+y6YpXzBWNBgs0POx1MlaTbq\/nJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86\/9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN\/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm\/IlA7pVj01dDfFkNSMVSxVZHbOU9\/acns9QusFYUGePCLQg98usLCBvcLY\/ATCMt0PPD5098ytJKBrI\/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs\/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP\/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH\/BAQDAgEGMA8GA1UdEwEB\/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME\/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr\/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q\/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy\/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ\/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAAFJHoCbmBEhmuFLtUBNqzXCAQFEOInQYQqZUvRJFcSB6HakzyX6TzTuWrLRc+Z+fSyw5gdjjNkeHiUsiMeVptsrLY22MM7r6ZLstYQEmiTQXWum\/wFr4zsKi4HNeuxCcKcrcT7h\/KV9FMp\/mdxVPiZKOFPtzEMp5tkgvRoQeXOiXBNpWfUeIbZLd+6A03THwP33aK1Ikd\/OB5ogGDS8rwroUWgYiVf1xt4Sv1YOQtPXqLad6Vg1zs0mmMLfmJjHwFk81jYV297DEUTuHBgrhnc46ldc+Sw25Sr4lq3UxdLhynW9ElMI0y04+rAzX77WnIOWsKOFfI8o8785g9W6uUY=\"\n}\n"'); $done({body});
