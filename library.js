function hasCollided(lbullet, lwall)
{

	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
        lbullet.velocityX=0;
		return true
	}
	return false;
}
