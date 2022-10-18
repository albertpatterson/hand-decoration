# Make Your Own Artificial Intelligence Driven Web App to Decorate Faces

The app will capture video and then apply artificial intelligence to decorate hands.

Make your own with [REPLIT.com](https://replit.com/@apatterson189/face-decoration)

![Demo](./doc/demo.gif 'Demo')

## Create your own

1. Create a png image to use as the decoration. Any app that allows you to create png files will work fine. The default decoration uses Google Drawings to make simple [sunglasses](https://docs.google.com/drawings/d/1k2MwpDjihT9NPSYpl2-Tn-whb9s2UMe-R5D7QDCNZAs/edit?usp=sharing). A few options:
   1. [Google Drawings](https://docs.google.com/drawings)
   1. [Figma](https://www.figma.com/)
   1. etc...
1. replace the image at "edit/decoration.png" with your new decoration.
1. update "edit/get_bbox.js" to correctly calculate the bounding box for your decoration. - the hand parameter includes data like the following:
   ```json {
   "keypoints":[
      {"x":116.17991215475753,"y":120.36580377349543,"name":"wrist"},
      {"x":127.53925048843396,"y":112.88683435931466,"name":"thumb_cmc"},
      {"x":134.29279499311167,"y":100.609215354723,"name":"thumb_mcp"},
      {"x":135.45609468190878,"y":88.5817280488972,"name":"thumb_ip"},
      {"x":138.3122381465012,"y":79.06764651315481,"name":"thumb_tip"},
      {"x":124.87266013921446,"y":80.64958228571787,"name":"index_finger_mcp"},
      {"x":124.57346743799384,"y":65.55178111021218,"name":"index_finger_pip"},
      {"x":123.26739819193348,"y":56.19569338325208,"name":"index_finger_dip"},
      {"x":121.94954215993944,"y":48.233749612388465,"name":"index_finger_tip"},
      {"x":116.08586528250473,"y":79.86020606214677,"name":"middle_finger_mcp"},
      {"x":114.42463598986727,"y":63.51970403096883,"name":"middle_finger_pip"},
      {"x":112.68884578041951,"y":52.85161579775242,"name":"middle_finger_dip"},
      {"x":111.27338399942978,"y":43.951990371998185,"name":"middle_finger_tip"},
      {"x":108.59280974485657,"y":82.4642113016385,"name":"ring_finger_mcp"},
      {"x":105.62866046763183,"y":67.0587126374236,"name":"ring_finger_pip"},
      {"x":103.91182743934304,"y":57.434835502364,"name":"ring_finger_dip"},
      {"x":102.85787458235303,"y":49.23176431383969,"name":"ring_finger_tip"},
      {"x":101.5285933354681,"y":88.0530767196229,"name":"pinky_finger_mcp"},
      {"x":98.3212209216404,"y":76.24185211248698,"name":"pinky_finger_pip"},
      {"x":96.24862602632814,"y":68.38309398299607,"name":"pinky_finger_dip"},
      {"x":94.7262179330679,"y":61.026427434053126,"name":"pinky_finger_tip"}
    ],
    "keypoints3D":[
      {"x":-0.002368078702901138,"y":0.09575916273181813,"z":0.025318428874015808,"name":"wrist"},
      {"x":0.026934378914747946,"y":0.07372355909457809,"z":0.007919400930404663,"name":"thumb_cmc"},
      {"x":0.04381343893667728,"y":0.04772518469816464,"z":-0.010401278734207153,"name":"thumb_mcp"},
      {"x":0.05273495234573564,"y":0.018309965303524006,"z":-0.033632129430770874,"name":"thumb_ip"},
      {"x":0.05363100115640125,"y":-0.009447644692102831,"z":-0.04741480201482773,"name":"thumb_tip"},
      {"x":0.02622669770400734,"y":-0.0040212601908749005,"z":0.0024801939725875854,"name":"index_finger_mcp"},
      {"x":0.025030391285586307,"y":-0.033665578290464335,"z":-0.0073282234370708466,"name":"index_finger_pip"},
      {"x":0.022898486942921112,"y":-0.053645011422128436,"z":-0.013026915490627289,"name":"index_finger_dip"},
      {"x":0.01802347251844856,"y":-0.07072718457746836,"z":-0.04192882031202316,"name":"index_finger_tip"},
      {"x":0.0015871039392132099,"y":-0.005950979889067217,"z":0.005361957475543022,"name":"middle_finger_mcp"},
      {"x":-0.0021855992991052413,"y":-0.043243284552674094,"z":-0.004918362945318222,"name":"middle_finger_pip"},
      {"x":-0.005648747234554209,"y":-0.06444458217242194,"z":-0.022660359740257263,"name":"middle_finger_dip"},
      {"x":-0.007313309731678729,"y":-0.08492198584319009,"z":-0.04447833076119423,"name":"middle_finger_tip"},
      {"x":-0.01970892114966191,"y":0.0012961498660968942,"z":-0.0013636648654937744,"name":"ring_finger_mcp"},
      {"x":-0.022342831820758066,"y":-0.03144744614880472,"z":-0.012295007705688477,"name":"ring_finger_pip"},
      {"x":-0.024556965306085456,"y":-0.05025175432534075,"z":-0.028327062726020813,"name":"ring_finger_dip"},
      {"x":-0.023650584065291778,"y":-0.06937298561226292,"z":-0.04696197807788849,"name":"ring_finger_tip"},
      {"x":-0.035936315608768477,"y":0.01949697258209849,"z":-0.004913553595542908,"name":"pinky_finger_mcp"},
      {"x":-0.040522023793615046,"y":-0.00592720368055614,"z":-0.010976769030094147,"name":"pinky_finger_pip"},
      {"x":-0.042306607001822795,"y":-0.026721870246624493,"z":-0.022413529455661774,"name":"pinky_finger_dip"},
      {"x":-0.043762274114857225,"y":-0.04434720498076692,"z":-0.03840623050928116,"name":"pinky_finger_tip"}
    ],
    "handedness":"Left",
    "score":0.9954652190208435}
   ```
1. The bounding box should return the following data:

   - x: the x coordinate of the top left corner of the decoration
   - y: the y coordinate of the top left corner of the decoration
   - width: the width of the decoration
   - height: the height of the decoration

1. You can use the provided example to check if your calculation is correct
