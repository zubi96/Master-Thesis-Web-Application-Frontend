import { Component, OnInit, TemplateRef } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  modalRef: BsModalRef;
  categoryId: number;
  model: any = {};

  constructor(private categoryService: CategoryService, private toastr: ToastrService, private modalService: BsModalService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    }, error => {
      this.toastr.error(error);
    });
  }

  createCategoryModal(template: TemplateRef<any>) {
    this.model.name = '';
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmCreation() {
    this.categoryService.createCategory(this.model).subscribe(() => {
      this.toastr.success('Category added successfully');
      this.loadCategories();
    }, error => {
      this.toastr.error(error);
    });
    this.model.name = '';
    this.close();
  }

  editCategoryModal(id: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.categoryId = id;
    this.model.name = this.categories.find(c => c.id === this.categoryId).name;
  }

  confirmEdit() {
    this.categoryService.updateCategory(this.categoryId, this.model).subscribe(() => {
      this.toastr.success('Category edited successfully');
      this.loadCategories();
    }, error => {
      this.toastr.error(error);
    });
    this.model.name = '';
    this.close();
  }

  deleteCategoryModal(id: number, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.categoryId = id;
  }

  confirmDeletion() {
    this.categoryService.deleteCategory(this.categoryId).subscribe(() => {
      this.categories.splice(this.categories.findIndex(c => c.id === this.categoryId), 1);
      this.toastr.success('Category deleted successfully');
    }, error => {
      this.toastr.error(error);
    });
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

}
