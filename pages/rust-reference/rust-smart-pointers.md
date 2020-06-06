import { rustArchiveRecord } from '@constants/rust-reference-list';

export const record = rustArchiveRecord['rust-smart-pointers'];

<PolkaContainer
  pageTitle={record.title}
  pageTitleString={record.titleString}
  pageDescription={record.description}
  keywords={['Advance Rust']}
  publishDate={record.createdAt}
  ogImage={record.ogImage}
>

<H1 updatedAt={record.updatedAt}>
  {record.title}
</H1>

Smart Pointers are normal structs, but they `impl`
`Deref` and `Drop` traits, so as to work exactly like
regular pointers. `Deref` trait helps Smart Pointers to be
allowed to dereferenced like regular pointers, i.e like
`*x`, where `x` is a pointer. `Drop` helps to memory
manage the resource Smart Pointers are pointing to, they
are like destructors in `C++`.

## `Box<T>`

`Box<T>` is very similar to regular pointers, but they can
store any type in themselves. Also, `Box<T>` owns the data
that it points to.

### When to use `Box<T>`

*I am directly quoting this from [Rust Book](https://doc.rust-lang.org/book/ch15-01-box.html)*

1. When you have a type whose size can’t be known at compile
   time and you want to use a value of that type in a
   context that requires an exact size
2. When you have a large amount of data and you want to
   transfer ownership but ensure the data won’t be copied
   when you do so.
3. When you want to own a value and you care only that
   it’s a type that implements a particular trait rather
   than being of a specific type.

**For Part 1.** Recursive Types like, Linked List requires
to have Nodes that points itself, where getting a size of
Node is impossible on Compile Time, `Box<T>` can be used.

`Box<T>` is already a part of `std::prelude`, thus
it doesn't has to be imported explicitly from `std::boxed::Box`.

```rs
struct Node {
  id: usize,
  name: String,
  role: String,
}

// Now we need to create Box<Node>, like any other object
let node: Box<Node> = Box::new(Node {
  id: 1,
  name: "Harry".to_owned(),
  role: "CHOSEN_ONE".to_owned()
})

// We can use above `node`, like any other object
println!("Node:: {:?}", node.name);
```

Do remember, `C` and `C++` required memory managed pointers,
but in Rust we don't have to explicitly manage Pointers and
there data. Rust handles it internally using ownership/lifetime
specs. This applies to Smart Pointers as well.

## `Rc<T>` (Reference Counter)

As the name suggests, `Rc<T>` smart pointer stores a count
of pointers to actual data. If count goes to zero, the
value can be cleaned up without any references becoming invalid.

`Rc<T>` is only for use in single-threaded scenarios.

Should be imported from `std::rc::Rc`.

### When to use `Rc<T>`

I will explain this with a practical example first.

Let's say I have an `Ball` instance, which needs to be
saved into two different `List`. In `JS`, we would've done
something like:

```jsx
let b1 = new Ball();
let list1 = new List();
let list2 = new List();

list1.add(b1);
list2.add(b1);
```

So simple right, but if you look closely, `b1` is the same
in `list1` and `list2`, so if `b1` changes in `list1`, it
will change in `list2` as well, as JS creates mutable objects
by default.

We can solve this, but that is not our concern here right now.
The main point behind showing this example was, that `list1`
and `list2` both have shared references to same resource,
and can read them simultaneously (considering `JS` was not
single threaded). Internally JS engine would be duplicating
the pointers to `b1` object when passed to `list1` and `list2`
, and the Memory would be managed by the GC. Rust doesn't has
any GC and thus to manage multiple pointers to single resource
we need `Rc<T>`.

> `Box<T>` owns the resource, thus sharing the data between
> two parents is not possible. For such cases `Rc<T>`
> can be used.

So, we can write the same thing above in Rust, as follows:

```rs
let b1 = Rc::new(Ball::new());
let list1 = List::new();
let list2 = List::new();

list1.add(Rc::clone(&b1));
list1.add(Rc::clone(&b2));
```

Above example would have defined `List` type,
something like below:

```rs
struct List {
  ball: Rc<Ball>,
}
```

The call to `Rc::clone` only increments the reference
count, which doesn’t take much time.

## `RefCell<T>`

### Concept of *Interior mutability*

*Interior mutability* is a pattern in Rust, where immutable
data are allowed to mutate.

<Blockquote type="warn">
  <InlineCode>RefCell&lt;T&gt;</InlineCode> gives us power of
  mutability in immutable pointers in Rust, but this should
  be used carefully, because if misused, compiler will not throw
  errors and programs might crash or have memory leaks,
  just like <InlineCode>C</InlineCode>
  or <InlineCode>C++</InlineCode> programs
</Blockquote>

Can be imported using `std::cell::RefCell`.

`RefCell<T>` follow all rules defined in Rust for pointers,
but in runtime. Thus, using two *mutable* references in same
scope will result in Program to panic at runtime.

`RefCell<T>` lets us have many immutable borrows or one
mutable borrow at any point in time.

Above is possible, because `RefCell<T>` keeps a count on
how many mutable or immutable references are present in a
scope, thus having more than one mutable reference panics.
The counter for `RefCell<T>` works similar to reference
counting.

### Let's Code

```rs
let x: RefCell<Vec<String>> = RefCell::new(vec![
  "Abra".to_owned(),
  "Kadabra".to_owned(),
]);

// We can now use it, have n number of immutable references
x.borrow().get(0);
x.borrow().get(1);

// But only one mutable reference at a time.
x.borrow_mut().push("Expelliarmus");
```

`.borrow()` gives us `Ref<T>` object, which is an immutable
smart pointer.

`.borrow_mut()` gives us `RefMut<T>` object, which is a
mutable smart pointer.

## Using `Rc<T>` and `RefCell<T>` together

Do you want `C` or `C++` mutable pointers, which can be
passed around freely in your application code.

Enters `Rc<RefCell<T>>` :stuck_out_tongue_winking_eye:

<Blockquote type="warn">
  <b>Important:</b> Having multiple mutable references
  present across the code-base can lead to inconsistencies,
  if not used properly. Though, I think
  using <InlineCode>RefCell&lt;T&gt;</InlineCode>
  and <InlineCode>Rc&lt;T&gt;</InlineCode> together will
  result in program to panic, giving a heads up on the issue.
</Blockquote>

This provides us with N number of Mutable/Immutable
references in any scope. We get a value that can have
multiple owners and that we can mutate!

```rs
let v1 = Rc::new(RefCell::new(5));
let v2 = Rc::clone(&v1);

// Now we can break rules, have more than one mutable reference to same memory location,
// in this example it's usize value `5`.
*v1.borrow_mut() += 10;
*v2.borrow_mut() += 10;

println!("Actual Value now = {:?}", v1); // 25
```

## Cautions

I am not writing on this, as even I will have to refer
to [Rust Memory Leaks](https://doc.rust-lang.org/book/ch15-06-reference-cycles.html)
every now and then to understand it better.

***

You can find the Code
[here](https://github.com/Shub1427/rustschool/blob/master/rust-book/smart-pointers/src/main.rs)

</PolkaContainer>
