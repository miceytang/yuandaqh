<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <title>文件上传</title>
    <style type="text/css">
      td,
      div,
      input,
      select,
      textarea,
      body {
        font-family: Verdana, 宋体, fantasy;
        font-size: 12px;
      }
      body {
        margin: 0 3px;
        padding: 0;
        background-color: transparent;
      }
      form {
        margin: 0;
        padding: 0;
      }
    </style>
    <LINK href="images/style.css" type=text/css rel=stylesheet>
  </head>

  <body>
    <form
      name="form"
      enctype="multipart/form-data"
      action="?action=save&sortType=11&stype=file&Tobj=ImageURL&toimg="
      method="post"
    >
      <input type="file" style=" width:260px;" class="input" name="filedata" />
      <input type="submit" class="button" name="submit" value="上传" />
    </form>
  </body>
</html>
