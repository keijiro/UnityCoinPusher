function OnTriggerEnter (other : Collider) {
	Destroy(other.gameObject);
	Score.score += 3;
}
