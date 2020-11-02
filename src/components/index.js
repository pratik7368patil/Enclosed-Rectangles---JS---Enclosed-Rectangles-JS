//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1, rec2) {
  const newRec = { ...rec1 };
  newRec.children = [
    {
      top: rec2.top - rec1.top,
      left: rec2.left - rec1.left,
      height: rec2.height,
      width: rec2.width,
      position: "absolute",
      children: []
    }
  ];

  return newRec;
}

module.exports = updateStructure;
