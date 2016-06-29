+++
author = "ちゃちゃまる"
author_username = "chachmaru"
categories = ["", ""]
date = "2016-06-20T04:58:22-04:00"
description = ""
draft = true
image = "002/grsakura.png"
tags = ["", ""]
title = "hello chacha maru"
slug = "hello-chacha-maru"
+++

## はじめに

## ~~~とは

## ~~~の紹介

## まとめ

```cc
#include <node.h>

namespace demo {
  void BlueMethod(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, "Yes, Yes, Yes!"));
  }

  void init(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "hello", BlueMethod);
  }

  NODE_MODULE(addon, init)

}  // namespace demo

```

Name | Age
-----|------
Bob | 27
Alice | 23

ほげほげ
ほげほげ

![](/img/members/n0bisuke/author.png)
![](/img/blog/001/grsakura.png)
