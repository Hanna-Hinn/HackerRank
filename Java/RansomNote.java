import java.util.Arrays;

public class RansomNote {
    public boolean canConstruct(String ransomNote, String magazine) {
        boolean result = true;

        int[] alpha = new int[26];

        Arrays.fill(alpha, 0);

        char[] ranCh = ransomNote.toCharArray();
        char[] magCh = magazine.toCharArray();

        for (int i = 0; i < ranCh.length; i++) {
            int tmp = ranCh[i];
            alpha[tmp % 97] += 1;
        }
        for (int i = 0; i < magCh.length; i++) {
            int tmp = magCh[i];
            alpha[tmp % 97] -= 1;
        }

        for (int i = 0; i < alpha.length; i++) {
            if (alpha[i] > 0) {
                result = false;
            }
        }

        return result;
    }
}
