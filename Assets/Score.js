static var score : int;

function Awake() {
	score = 30;
}

function Update () {
	guiText.text = score.ToString();
}
