# Astro Blaster

<Blockquote type="warn">
    <strong>NOTE</strong>: This Tutorial is not finished and requires a lot of effort and learnings, to
    properly write the important thing. I am trying to learn Game Dev, using various sources,
    from scratch using Vulkan API, using minimal game engine like <InlineCode>ggez</InlineCode> and Godot Engine.
    Combining that knowledge and writing that down here will take time.
</Blockquote>

This Tutorial is mostly made up from Astro Blaster example from
Ggez game engine in Rust.

> __NOTE__: It is assumed that you have little bit experience in Rust lang
> already. Rust book is a great place to start and learn Rust
> if already not read.

## What are we Building

We will be building a Nostalgic Astro Blaster Game from 90s.
The purpose of this post is to keep an archive for myself (and
others), who are very beginners in game programming and does'nt
know some basic concepts used in game dev.

> **TLDR;** You can find the code here: [rustschool](https://github.com/Shub1427/rustschool/tree/master/gui/ggez_basics/src/bin/astro_blaster_v2)

Do keep in mind, I am not writing best code, or better said this might be the worst code
ever written :stuck_out_tongue_winking_eye:.
What I am trying to achieve here is a minimal understanding for the type of code
written in the world of Game dev, like:

* How to show some images on screen.
* How to use Game units instead of pixel, to get a resolution independent code.
* How to use keyboard for inputs. What `Edge-Triggered` and `Level-Triggered` keyboard events are.

Concepts of applying Physics, once these things are clear becomes easy.

## Draw Black Background on Screen

```rs
use ggez::event;
use ggez::graphics;
use ggez::{Context, ContextBuilder, GameResult};

struct World {
    stage: usize, // Nothing else for now.
}

impl World {
    fn new() -> Self {
        World {
            stage: 0
        }
    }
}

impl event::EventHandler for World {
    fn update(&mut self, _ctx: &mut Context) -> GameResult {
        Ok(())
    }

    fn draw(&mut self, ctx: &mut Context) -> GameResult {
        graphics::clear(ctx, graphics::BLACK); // Clear with Black Background
        graphics::present(ctx)?; // It's important to present the buffer on Screen
        Ok(())
    }
}

fn main() -> GameResult {
    let (ctx, event_loop) = &mut ContextBuilder::new("Astro Blaster v2", "Subroto Biswas")
        .build()?;
    let mut state = World::new();
    event::run(ctx, event_loop, &mut state)
}
```

Diff: [74bae4596c1cf1f0bec324946860422023d77d0c](https://github.com/Shub1427/rustschool/commit/74bae4596c1cf1f0bec324946860422023d77d0c)

## Add an Image Resource root

We need to to create a Player now. The player needs some image to represent itself.
Thus we need to load resources someway. Following changes, helps us to setup root dir
to look into for all our resources.

<Diff lang="rs" addedLineNumbers={[3, 5]} removedLineNumbers={[]} hideLines>{`// main.rs
// in fn main()
let resource_dir = "./src/bin/astro_blaster_v2/resources";
let (ctx, event_loop) = &mut ContextBuilder::new("Astro Blaster v2", "Subroto Biswas")
    .add_resource_path(resource_dir)
    .build()?;
let mut state = World::new();
event::run(ctx, event_loop, &mut state)`}
</Diff>

Now, Calling this simple function, will load resources from this root directory.
For example:

<CodeBlock className="language-rs" showLines={false}>{`let player_image = graphics::Image::new(ctx, "/player.png")?;`}</CodeBlock>


So, we now know how to load our resources, we now need to create a `Player` instance and draw it's image
on screen.

First thing, to create a new `mod` for `Player` struct and it's implementations.

* Create a file `player.rs`

```rs
// player.rs

pub struct Player {
    image: graphics::Image,
    pos: nalgebra::Point2<f32>,
    // Player's Facing Direction
    facing: f32,
}

impl Player {
    pub fn new(ctx: &mut Context) -> GameResult<Self> {
        Ok(Player {
            image: graphics::Image::new(ctx, "/playerShip1_blue.png")?,
            pos: nalgebra::Point2::new(24.0, 24.0),
            facing: 0.,
        })
    }
}

impl event::EventHandler for Player {
    fn update(&mut self, _ctx: &mut Context) -> GameResult {
        // Do nothing for now;
        Ok(())
    }

    fn draw(&mut self, ctx: &mut Context) -> GameResult {
        let params = graphics::DrawParam::default()
            .dest(self.pos)
            .scale(nalgebra::Vector2::new(0.5, 0.5));
        graphics::draw(ctx, &self.image, params)?;
        Ok(())
    }
}
```

Now we just need to call the `draw` implementation of `Player` in `World`s `draw` calls.

<Diff lang="rs" addedLineNumbers={[5]} removedLineNumbers={[]} hideLines>{`// main.rs
//
fn draw(&mut self, ctx: &mut Context) -> GameResult {
    graphics::clear(ctx, graphics::BLACK); // Clear with Black Background
    self.player.draw(ctx)?;
    graphics::present(ctx)?; // It's important to present the buffer on Screen
    Ok(())
}`}
</Diff>

Diff: [c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e](https://github.com/Shub1427/rustschool/commit/c207cd3b5810b7a2775ccffcc77cc4e4db1a7b5e)


## Move the Player with Keyboard events

Ggez uses `edge-triggered` keyboard events, simulated to look like `level-triggered`.

<br />

In simple words, `Edge Triggered` refers to single keyboard event, no matter
how long we keep the key pressed. For eg. If I have pressed `Up` button
and also press `Right` button after sometime, without leaving the `Up` button, we lose
event on `Up` button, as a new keycode `Right` overrides it.

> Using `key_down_event` from `event::EventHandler` trait, actually simulates
> the above as level triggered, but once the keycode change, old keypress is lost.

On the other hand, `Level Triggered` refers to continous events, that keeps on triggering
untill user stops the keypress. it can also handle more than one keypress at a time.

<br />

To hack ggez to get the desired output from keyboard events, i.e., to get events `Up`
and `Right` simultaneously, we use `input::keyboard::is_key_pressed` instead, with
multiple `if/else` instead of `key_down_event` in trait impl.

```rs
// player.rs
impl Player {
    ...
    pub fn handle_events(&mut self, ctx: &mut Context) -> GameResult {
        let mut dy = 0.;
        let mut dx = 0.;
        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Up) {
            dy = -1.0;
        }
        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Right) {
            dx = 1.0;
        }
        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Down) {
            dy = 1.0;
        }
        if input::keyboard::is_key_pressed(ctx, event::KeyCode::Left) {
            dx = -1.0;
        }
        self.pos = nalgebra::Point2::new(self.pos.x + dx, self.pos.y + dy);
        Ok(())
    }
}

impl event::EventHandler for Player {
    fn update(&mut self, ctx: &mut Context) -> GameResult {
        self.handle_events(ctx)?;
        Ok(())
    }
    ...
}
```

We are directly updating the `position` of the player, instead of deriving it from velocity and time,
which give precise control over the Player's movement. Anyways, for simplicity change the position
directly for now is fine. We will later on update it to use `velocity * time` to get the `dpos` moved
in unit time.

<br />

Now we just need to call `player.update` in `world.update` to reflect it on the screen.

Diff: [d8a9730f134f056acd451692834722cd75b020a6](https://github.com/Shub1427/rustschool/commit/d8a9730f134f056acd451692834722cd75b020a6)


## Use Resolution independent Game Units:

Our game is very simple till now, and it will remain the same for sometime. So it is very hard
to justify, how a movement of player done using pixel calculation is any different from using
some random Game unit. To properly understand, please follow the coming image demonstrations carefully.

<Image src="https://user-images.githubusercontent.com/11786283/79061650-08167800-7cb0-11ea-8a7d-cc1096560e0a.jpeg" placeholder="https://user-images.githubusercontent.com/11786283/79061723-7e1adf00-7cb0-11ea-8398-03e3e5b56f8e.jpg" alt="Descriptive relative speed to varying viewport or the world" />

