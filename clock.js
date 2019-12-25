public class ClockTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Clock c = new Clock(2,42,38,400);
		
		System.out.printf("The time is:", c.getHour(), c.getMinute(), c.getSecond(), c.getGrain());
	}

}
public class Clock{
	
	private int hour; // 0-23 hours
	private int minute; // 0-59 minutes
	private int second; // 0-59 seconds
	private double grain; // 0-3600 seconds

public Clock (int h, int m, int s) // set the clock to midnight, 0:0:0;  creating the clock
{
	hour = ( (h >= 0 && < 23) ? h : 0;
	minute = ( (m >=0 && <59) ? m : 0;
	second = ( (s >= 0 && <59) ? s : 0;
}

	Clock c = new Clock ();

public void Tick // how the clock works

	if ( second > 59)
{
	minute++;
}
	else
		if ( minute >= 3600 )
{
	hour++;
}

	if ( hour >=24)
{
	hour == 0;
}

}
