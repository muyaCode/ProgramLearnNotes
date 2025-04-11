# C语言面试高频编程题及详细解析

## 1.编写一个C语言程序来反转整数。

**答案**：在本文中，我们将学习如何使用C语言编写一个程序，用于反转给定数字的各位数字。

假设输入为123，那么我们的程序应输出321。

```c
#include <stdio.h>
int main()
{
    int n, reverse = 0, remainder;
    printf("Enter an integer: ");
    scanf("%d", &n);
    while (n!= 0) {
        remainder = n % 10;
        reverse = reverse * 10 + remainder;
        n /= 10;
    }
    printf("Reversed number = %d", reverse);
    return 0;
}
```

**输出**：

```
Enter an integer: 2345
Reversed number = 5432
```

## 2.用C语言编写一个程序，检查给定的数字是否为质数。

**答案**：在本教程中，我们将学习如何使用C语言编写一个程序，来检查用户输入的整数是否为质数。

```c
#include <stdio.h>

int main() {
    int n, i, flag = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    // 0和1不是质数
    // 如果是非质数则将标志位设为1
    if (n == 0 || n == 1)
        flag = 1;
    for (i = 2; i <= n / 2; ++i) {
        // 如果n能被i整除，那么n不是质数
        // 如果是非质数则将标志位设为1
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    // 如果标志位为0则是质数
    if (flag == 0)
        printf("%d is a prime number.", n);
    else
        printf("%d is not a prime number.", n);
    return 0;
}
```

**输出**：

```
Enter a positive integer: 29
29 is a prime number.
```

## 3.用C语言编写一个程序，使用迭代法打印斐波那契数列。

**答案**：在本文中，我们将学习如何使用迭代法在C语言程序中打印斐波那契数列。

```c
#include <stdio.h>

int main() {
    int i, n;
    // 初始化前两项
    int t1 = 0, t2 = 1;
    // 初始化下一项（第三项）
    int nextTerm = t1 + t2;
    // 从用户处获取项数
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    // 打印前两项t1和t2
    printf("Fibonacci Series: %d, %d, ", t1, t2);
    // 打印第三项到第n项
    for (i = 3; i <= n; ++i) {
        printf("%d, ", nextTerm);
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
    }
    return 0;
}
```

**输出**：

```
Enter the number of terms: 10
Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
```

## 4.找出三个数中的最大数。

**答案**：在本文中，我们将学习如何使用C语言找出三个数中的最大数。

```c
#include <stdio.h>
int main()
{
    int a = 1, b = 2, c = 3;
    // a最大的情况
    if (a > b && a > c)
        printf("%d", a);
    // b最大的情况
    else if (b > a && b > c)
        printf("%d", b);
    // 其余情况，即c最大
    else
        printf("%d", c);
    return 0;
}
```

**输出**：

```
3
```

## 5.编写一个C语言程序来计算复利。

**答案**：在本文中，我们将学习如何编写一个C语言程序来计算复利。

```c
#include <stdio.h>
// 为了使用幂函数，必须包含数学头文件
#include <math.h>

// 主函数
int main()
{
    // 本金
    double principal = 2300;
    // 年利率
    double rate = 7;
    // 时间
    double time = 4;
    // 计算复利
    double amount = principal * ((pow((1 + rate / 100), time)));
    double CI = amount - principal;
    printf("Compound Interest is : %lf", CI);
    return 0;
}
```

**输出**：

```
Compound Interest is : 714.830823
```

## 6.编写一个程序将二进制数转换为十进制数。

**答案**：在本文中，我们将学习如何将二进制数转换为十进制数。

```c
#include <stdio.h>

int main()
{
    int N = 11011;
    // 初始化基数a为1
    int a = 1;
    int ans = 0;
    while (N!= 0) {
        ans = ans + (N % 10) * a;
        N = N / 10;
        a = a * 2;
    }
    printf("%d", ans);
    return 0;
}
```

**输出**：

```
27
```

## 7.编写一个程序来检查年份是否为闰年。

**答案**：在本文中，我们将学习如何检查一个年份是否为闰年。

```c
#include <stdio.h>

// 检查闰年的函数声明
void leap_year(int year)
{
    // 如果年份是400的倍数，则为闰年
    if (year % 400 == 0)
        printf("%d is a leap year.\\n", year);
    // 如果年份是100的倍数，则不是闰年
    else if (year % 100 == 0)
        printf("%d is not a leap year.\\n", year);
    // 如果年份是4的倍数，则为闰年
    else if (year % 4 == 0)
        printf("%d is a leap year.\\n", year);
    // 不是闰年的情况
    else
        printf("%d is not a leap year.\\n", year);
}

int main()
{
    leap_year(2000);
    leap_year(2002);
    leap_year(2008);
    return 0;
}
```

**输出**：

```
2000 is a leap year.
2002 is not a leap year.
2008 is a leap year.
```

## 8.编写一个程序求一个数的阶乘。

**答案**：在本文中，我们将学习如何编写一个程序来求一个数的阶乘。

```c
#include <stdio.h>

// 使用迭代法计算阶乘
void factorial_iteration(int N)
{
    unsigned long long int ans = 1;
    for (int i = 1; i <= N; i++) {
        ans = ans * i;
    }
    printf("Factorial of %d is %lld\\n", N, ans);
}

// 使用递归法计算阶乘
int factorial(int N)
{
    if (N == 0)
        return 1;
    // 递归调用
    return N * factorial(N - 1);
}

int main()
{
    int n;
    n = 13;
    factorial_iteration(n);
    n = 9;
    printf("Factorial of %d using recursion:%d\\n", n, factorial(n));
    return 0;
}
```

**输出**：

```
Factorial of 13 is 6227020800
Factorial of 9 using recursion:362880
```

## 9.检查一个数是否为回文数。

**答案**：在本文中，我们将学习如何检查一个数是否为回文数。

```c
#include <stdio.h>

// 检查数字是否为回文数的函数
void check_palindrome(int N)
{
    int T = N;
    int rev = 0; // 该变量用于存储反转后的数字
    // 执行循环来反转给定数字的各位数字
    while (T!= 0) {
        rev = rev * 10 + T % 10;
        T = T / 10;
    }
    // 比较原数字和反转后的数字
    if (rev == N)
        printf("%d is palindrome\\n", N);
    else
        printf("%d is not a palindrome\\n", N);
}

int main()
{
    int N = 13431;
    int M = 12345;
    // 函数调用
    check_palindrome(N);
    check_palindrome(M);
    return 0;
}
```

**输出**：

```
13431 is palindrome
12345 is not a palindrome
```

## 10.编写一个C语言程序，在不使用位运算符的情况下检查两个数是否相等。

**答案**：在本文中，我们将学习如何编写一个C语言程序，在不使用位运算符的情况下检查两个数是否相等。

```
#include <stdio.h>

int main()
{
    int x = 1;
    int y = 2;
    // 使用异或（XOR），两个相等的数异或结果为0
    if (!(x ^ y))
        printf(" %d is equal to %d ", x, y);
    else
        printf(" %d is not equal to %d ", x, y);
    return 0;
}
```

**输出**：

```
1 is not equal to 2
```

## 11.编写一个C语言程序来求两个数的最小公倍数（LCM）。

**答案**：在本文中，我们将学习如何编写一个C语言程序来求两个数的最小公倍数。

```c
#include <stdio.h>

// 求两个数中的较小值
int Min(int Num1, int Num2)
{
    if (Num1 >= Num2)
        return Num2;
    else
        return Num1;
}

int LCM(int Num1, int Num2, int K)
{
    // 如果两个数中有一个为1，则返回它们的乘积
    if (Num1 == 1 || Num2 == 1)
        return Num1 * Num2;
    // 如果两个数相等
    if (Num1 == Num2)
        return Num1;
    // 如果K小于两个数中的较小值
    if (K <= Min(Num1, Num2)) {
        // 检查两个数是否都能被K整除
        if (Num1 % K == 0 && Num2 % K == 0) {
            // 递归调用LCM函数
            return K * LCM(Num1 / K, Num2 / K, 2);
        }
        // 否则
        else
            return LCM(Num1, Num2, K + 1);
    }
    // 如果K超过较小值
    else
        return Num1 * Num2;
}

int main()
{
    // 给定两个数N和M
    int N = 12, M = 9;
    // 函数调用
    int ans = LCM(N, M, 2);
    printf("%d", ans);
    return 0;
}
```

**输出**：

```
36
```

## 12.编写一个C语言程序，在不使用任何循环或条件语句的情况下求两个数的最大值和最小值。

**答案**：在本文中，我们将学习如何在不使用任何循环或条件语句的情况下求两个数的最大值和最小值。

```
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a = 55, b = 23;
    // 返回两个数中的最大值
    printf("max = %d\\n", ((a + b) + abs(a - b)) / 2);
    // 返回两个数中的最小值
    printf("min = %d", ((a + b) - abs(a - b)) / 2);
    return 0;
}
```

**输出**：

```
max = 55
min = 23
```

## 13.编写一个C语言程序，不使用分号来打印所有小于等于N的自然数。

**答案**：在本文中，我们将学习如何不使用分号来打印所有小于等于N的自然数。

```c
#include <stdio.h>
#define N 10

int main(int val)
{
    if (val <= N && printf("%d ", val) && main(val + 1)) {
    }
}
```

**输出**：

```
1 2 3 4 5 6 7 8 9 10
```

## 14.编写一个程序使用C语言创建金字塔图案。

**答案**：在本文中，我们将学习如何使用C语言创建金字塔图案。

```c
#include <stdio.h>

int main()
{
    int N = 5;
    // 外层循环控制行数
    for (int i = 1; i <= N; i++) {
        // 内层循环用于打印空格
        for (int j = 1; j <= N - i; j++)
            printf(" ");
        // 内层循环用于打印星号
        for (int j = 1; j < 2 * i; j++)
            printf("*");
        printf("\\n");
    }
    return 0;
}
```

**输出**：

```
    *
   ***
  *****
 *******
*********
```

## 15.编写一个程序使用数字来生成杨辉三角。

**答案**：在本文中，我们将学习如何编写一个程序使用数字来生成杨辉三角。

```c
#include <stdio.h>

int main()
{
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            printf(" ");
        }
        int x = 1;
        for (int j = 1; j <= i; j++) {
            printf("%d ", x);
            x = x * (i - j) / j;
        }
        printf("\\n");
    }
    return 0;
}
```

**输出**：

```
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

## 16.编写一个程序来反转数组。

**答案**：在本文中，我们将学习如何编写一个程序来反转数组。

```c
#include <stdio.h>

void reverse(int* arr, int n)
{
    // 交换首尾元素
    for (int i = 0, j = n - 1; i < j; i++, j--) {
        int ele = arr[i];
        arr[i] = arr[j];
        arr[j] = ele;
    }
}

int main()
{
    int arr[] = { 1, 2, 3, 4, 5 };
    // 函数调用
    reverse(arr, 5);
    // 打印反转后的数组元素
    for (int i = 0; i < 5; i++)
        printf("%d ", arr[i]);
    return 0;
}
```

**输出**：

```
5 4 3 2 1
```

## **17. 编写一个程序来检查C语言数组中的重复元素。**

**答案**：在本文中，我们将学习如何检查C语言数组中的重复元素。

```c
#include <stdio.h>

int Sort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 查找重复元素
void findRepeating(int arr[], int n)
{
    int count = 0;
    for (int i = 0; i < n; i++) {

        int flag = 0;
        while (i < n - 1 && arr[i] == arr[i + 1]) {
            flag = 1;
            i++;
        }
        if (flag)
            printf("%d ", (arr[i - 1]));
    }

    return;
}

int main()
{
    int arr[] = { 1, 3, 4, 1, 2, 3, 5, 5 };

    int n = sizeof(arr) / sizeof(arr[0]);

    Sort(arr, n);

    findRepeating(arr, n);

    return 0;
}
```

**输出**：

```
1 3 5
```

## 18. 编写一个程序来打印数组中的最大和最小元素。

**答案**：在本文中，我们将学习如何打印数组中的最大和最小元素。

```c
#include <stdio.h>

void find_small_large(int arr[], int n)
{
    int min, max;

    // 将第一个元素赋值为最小和最大元素
    min = arr[0];
    max = arr[0];

    for (int i = 1; i < n; i++) {

        // 在此处查找最小值
        if (arr[i] < min)
            min = arr[i];
        // 在此处查找最大值
        if (arr[i] > max)
            max = arr[i];
    }
    printf("Maximum: %d and Minimum: %d\\n", min, max);
}

int main()
{
    int arr[] = { 15, 14, 35, 2, 11, 83 };
    int len = sizeof(arr) / sizeof(arr[0]);

    // 函数调用
    find_small_large(arr, len);

    return 0;
}
```

**输出**：

```
Smallest: 2 and Largest: 83
```

## 19. 编写一个程序，将数组的前半部分按升序排序，后半部分按降序排序。

**答案**：在本文中，我们将学习如何将数组的前半部分按升序排序，后半部分按降序排序。

```c
#include <stdio.h>

void Sort_asc_desc(int arr[], int n)
{
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // 按升序打印前半部分
    for (int i = 0; i < n / 2; i++)
        printf("%d ", arr[i]);

    // 按降序打印后半部分
    for (int j = n - 1; j >= n / 2; j--)
        printf("%d ", arr[j]);
}

int main()
{
    int arr[] = { 11, 23, 42, 16, 83, 73, 59 };
    int N = sizeof(arr) / sizeof(arr[0]);

    Sort_asc_desc(arr, N);

    return 0;
}
```

**输出**：

```
11 16 23 83 73 59 42
```

## 20. 编写一个程序来求矩阵的转置。

**答案**：在本文中，我们将学习如何求矩阵的转置。

```c
#include <stdio.h>

// 此函数将A[][]的转置存储到B[][]中
void transpose(int N, int M, int A[M][N], int B[N][M])
{
    int i, j;
    for (i = 0; i < N; i++)
        for (j = 0; j < M; j++)
            B[i][j] = A[j][i];
}

int main()
{
    int M = 3;
    int N = 4;

    int A[3][4] = { { 1, 1, 1, 1 },
                    { 2, 2, 2, 2 },
                    { 3, 3, 3, 3 } };

    // 注意B[][]的维度
    int B[N][M], i, j;

    transpose(N, M, A, B);

    printf("Result matrix is \\n");
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++)
            printf("%d ", B[i][j]);
        printf("\\n");
    }

    return 0;
}
```

**输出**：

```
Result matrix is
1 2 3
1 2 3
1 2 3
1 2 3
```

## 21. 编写一个程序来计算字符串中数字的总和。

**答案**：在本文中，我们将学习如何编写一个程序来计算字符串中数字的总和。

```c
#include <stdio.h>

int main()
{
    char s[] = "124259";

    int ans = 0;
    // 遍历所有数字
    for (int i = 0; s[i]!= '\\0'; i++) {
        int ele = s[i] - 48;
        if (ele <= 9)
            ans += ele;
    }

    // 打印数字总和
    printf("%d", ans);

    return 0;
}
```

**输出**：

```
23
```