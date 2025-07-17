
import cmath

def solve_quadratic(a, b, c):
    """
    Solves a quadratic equation of the form ax^2 + bx + c = 0.
    Returns the roots (x1, x2).
    """
    delta = (b**2) - 4*(a*c)

    if delta > 0:
        x1 = (-b - delta**0.5) / (2*a)
        x2 = (-b + delta**0.5) / (2*a)
        return x1, x2
    elif delta == 0:
        x1 = x2 = -b / (2*a)
        return x1, x2
    else:
        x1 = (-b - cmath.sqrt(delta)) / (2 * a)
        x2 = (-b + cmath.sqrt(delta)) / (2 * a)
        return x1, x2

if __name__ == "__main__":
    print("Quadratic Equation Solver (ax^2 + bx + c = 0)")

    try:
        a = float(input("Enter coefficient a: "))
        b = float(input("Enter coefficient b: "))
        c = float(input("Enter coefficient c: "))

        if a == 0:
            print("Error: Coefficient 'a' cannot be zero for a quadratic equation.")
        else:
            x1, x2 = solve_quadratic(a, b, c)
            print(f"The roots are: x1 = {x1} and x2 = {x2}")
    except ValueError:
        print("Invalid input. Please enter numeric values for coefficients.")
