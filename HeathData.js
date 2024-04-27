class HealthData
{
    constructor(health)
    {
        this.health = health;
    }

    IsAlive()
    {
        return this.health > 0;
    }

    ReduceHealth(damage)
    {
        this.health -= damage;
        if(this.health < 0)
            this.health = 0;
    }
}