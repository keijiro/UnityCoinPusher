var prefab : Transform;

function Update () {
	if (Input.GetButtonDown ("Fire1")) {
		var offs = Vector3(Mathf.Sin(Time.time * 7), 0, 0);
		Instantiate(prefab, transform.position + offs, transform.rotation);
		Score.score -= 1;
	}
}