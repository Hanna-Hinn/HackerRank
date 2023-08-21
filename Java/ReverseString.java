import java.util.ArrayList;

public class ReverseString {

    public void reverseString(char[] s) {
        ArrayList<Character> list = new ArrayList<>();
        for (int i = s.length - 1; i >= 0; i--) {
            list.add(s[i]);
        }

        for (int i = 0; i < list.size(); i++) {
            s[i] = list.get(i);
        }

    }
}
