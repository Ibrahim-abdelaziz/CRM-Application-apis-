# Generated by Django 2.1.7 on 2019-09-20 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CRM_APP', '0003_auto_20190912_2151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clients',
            name='Balance',
            field=models.CharField(max_length=10),
        ),
    ]
