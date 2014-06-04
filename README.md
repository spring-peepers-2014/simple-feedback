# Simple Feedback

A simple application that was live coded for spring peepers 2014 as a basic
codebase for looking at testing, Rails project creation etc.

## What Should I look at

Here are the files we changed

```text
 .rspec                                        |   1 +
 Gemfile                                       |  13 ++
 Gemfile.lock                                  |  52 +++++
 README.rdoc                                   | 261 --------------------------
 app/controllers/admin/feedbacks_controller.rb |  11 ++
 app/controllers/admin/welcome_controller.rb   |   4 +
 app/controllers/feedbacks_controller.rb       |  18 ++
 app/models/feedback.rb                        |   5 +
 app/models/rage_communicator.rb               |  18 ++
 app/views/admin/feedbacks/index.html.erb      |   3 +
 app/views/feedbacks/index.html.erb            |   4 +
 app/views/feedbacks/new.html.erb              |  22 +++
 app/views/shared/_feedback.html.erb           |   4 +
 app/views/shared/_flash_success.html.erb      |   6 +
 config/application.rb                         |   4 +
 config/database.yml                           |  38 ----
 config/routes.rb                              |  59 +-----
 db/migrate/20140603153435_create_feedbacks.rb |  11 ++
 db/schema.rb                                  |  24 +++
 public/index.html                             | 241 ------------------------
 spec/controllers/feedbacks_spec.rb            |  17 ++
 spec/factories/.gitkeep                       |   0
 spec/factories/feedback.rb                    |  11 ++
 spec/models/rage_communicator_spec.rb         |  13 ++
 spec/spec_helper.rb                           |  43 +++++
 25 files changed, 289 insertions(+), 594 deletions(-)
```


