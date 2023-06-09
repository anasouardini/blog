<?php exit; ?>
[2021-02-01 04:06:22] ERROR: Form 778 > Mailchimp API error: 400 Bad Request. Forgotten Email Not Subscribed. anas*******@gm***.com was permanently deleted and cannot be re-imported. The contact must re-subscribe to get back on the list.

Request: 
POST https://us7.api.mailchimp.com/3.0/lists/a5d4e95dfb/members

{"status":"pending","email_address":"anas*******@gm***.com","interests":{},"merge_fields":{"FNAME":"anas"},"email_type":"html","ip_signup":"105.157.80.66","tags":["free javascript pdf package"]}

Response: 
400 Bad Request
{"title":"Forgotten Email Not Subscribed","status":400,"detail":"anas*******@gm***.com was permanently deleted and cannot be re-imported. The contact must re-subscribe to get back on the list.","instance":"edbd6306-2115-4dae-a28e-ec023df03e71"}
[2021-02-01 04:34:47] WARNING: Form 778 > anas*********@gm***.com is already subscribed to the selected list(s)
