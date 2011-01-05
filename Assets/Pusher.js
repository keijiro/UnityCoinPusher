var origin : Vector3;

function Awake() {
	origin = rigidbody.position;
}

function Update () {
	var offs = Vector3(0, 0, Mathf.Sin(Time.time));
	rigidbody.MovePosition(origin + offs);
}