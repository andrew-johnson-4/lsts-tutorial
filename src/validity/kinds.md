# Kinded Proofs

Kinds allow the program to setup a "cleanroom" environment for the type system.
The canonical example of polykinding is for the Unit kind.

The International System of Units defines a unit as a number combined with a Unit.
In LSTS this can be modelled as the number being a Term and the unit being a Unit.
The SI system additionally defines several units as "base units".
All units that are not base units can be written as a compound of base units.
Examples of base units are *Seconds* or *Metres*.
Examples of non-base units are *Joules* or *Teslas*.

In LSTS it is convenient to mark base units as *normal*.
A normal Type can be preferred during type conversion.
For example, if a unit of Speed is multiplied by a unit of Time, it will result in a unit of Distance.
When we look closer at these units we see that Speed is a unit of Distance over Time.
It is only within this normal form that we can discover that Speed * Time = Distance.

### Kinded Projection

If you want to work within a Kind and only within that Kind then you should use Kind Projection.
A compound Type *x: Real + Second* can be narrowed into a Unit with double colon syntax:
*x :: Unit*. This will leave us with only the type Second, stripping the variable of its other associated Types.
