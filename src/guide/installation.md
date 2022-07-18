# Installation

There are multiple ways to install the lsts CLI tool.
Choose any one of the methods below that best suit your needs.

## Build from source using Rust

To build the `lsts` executable from source, you will first need to install Rust and Cargo.
Follow the instructions on the [Rust installation page].

Once you have installed Rust, the following command can be used to build and install lsts:

```sh
cargo install lsts
```

This will automatically download lsts from [crates.io], build it, and install it in Cargo's global binary directory (`~/.cargo/bin/` by default).

To uninstall, run the command `cargo uninstall lsts`.

[Rust installation page]: https://www.rust-lang.org/tools/install
[crates.io]: https://crates.io/

### Installing the latest master version

The version published to crates.io will ever so slightly be behind the version hosted on GitHub.
If you need the latest version you can build the git version of lsts yourself.

```sh
cargo install --git https://github.com/rust-lang/LSTS.git lsts
```

Again, make sure to add the Cargo bin directory to your `PATH`.

If you are interested in making modifications to lsts itself, check out the [Contributing Guide] for more information.

[Contributing Guide]: https://github.com/andrew-johnson-4/LSTS/blob/master/CONTRIBUTING.md
